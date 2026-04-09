#!/usr/bin/env ts-node

/**
 * Enrich key parameter definitions in index.json with references,
 * dependencies, and system compatibility metadata.
 *
 * This script adds scientifically traceable metadata to the most
 * commonly used parameters. It reads and rewrites index.json in place.
 *
 * Run: npx tsx scripts/enrich-parameters.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface Enrichment {
  references?: string[];
  dependencies?: string[];
  compatibility?: {
    systemTypes: string[];
  };
}

// Enrichment data for key parameters — references are foundational MES literature
const enrichments: Record<string, Enrichment> = {
  biofilm_conductivity: {
    references: [
      'Malvankar et al. (2011) Nature Nanotechnology 6:573-579. doi:10.1038/nnano.2011.112',
      'Reguera et al. (2005) Nature 435:1098-1101. doi:10.1038/nature03661',
    ],
    dependencies: ['biofilm_thickness', 'biofilm_coverage', 'electron_transfer_rate'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  biofilm_thickness: {
    references: [
      'Sun et al. (2016) Bioresource Technology 215:1-7. doi:10.1016/j.biortech.2016.04.003',
      'Read et al. (2010) BMC Microbiology 10:98. doi:10.1186/1471-2180-10-98',
    ],
    dependencies: ['biofilm_conductivity', 'biofilm_coverage', 'substrate_concentration'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  coulombic_efficiency: {
    references: [
      'Logan et al. (2006) Environmental Science & Technology 40:5181-5192. doi:10.1021/es0605016',
      'Logan (2008) Microbial Fuel Cells. John Wiley & Sons. ISBN:978-0-470-23948-3',
    ],
    dependencies: ['current_density_max', 'substrate_concentration', 'internal_resistance', 'hydraulic_retention_time'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  current_density_max: {
    references: [
      'Logan et al. (2006) Environmental Science & Technology 40:5181-5192. doi:10.1021/es0605016',
      'Rabaey & Verstraete (2005) Trends in Biotechnology 23:291-298. doi:10.1016/j.tibtech.2005.04.008',
    ],
    dependencies: ['electrode_spacing_cell', 'internal_resistance', 'biofilm_conductivity'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  open_circuit_voltage: {
    references: [
      'Logan et al. (2006) Environmental Science & Technology 40:5181-5192. doi:10.1021/es0605016',
      'Rozendal et al. (2008) Trends in Biotechnology 26:450-459. doi:10.1016/j.tibtech.2008.04.008',
    ],
    dependencies: ['ph_level', 'operating_temperature', 'substrate_concentration'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  power_density: {
    references: [
      'Logan et al. (2006) Environmental Science & Technology 40:5181-5192. doi:10.1021/es0605016',
      'Fan et al. (2008) Environmental Science & Technology 42:8101-8107. doi:10.1021/es801747z',
    ],
    dependencies: ['current_density_max', 'open_circuit_voltage', 'internal_resistance', 'electrode_spacing_cell'],
    compatibility: { systemTypes: ['MFC'] },
  },
  maximum_power_density: {
    references: [
      'Logan et al. (2006) Environmental Science & Technology 40:5181-5192. doi:10.1021/es0605016',
      'Fan et al. (2008) Environmental Science & Technology 42:8101-8107. doi:10.1021/es801747z',
    ],
    dependencies: ['power_density', 'internal_resistance', 'electrode_spacing_cell'],
    compatibility: { systemTypes: ['MFC', 'MEC'] },
  },
  internal_resistance: {
    references: [
      'Liang et al. (2007) Biosensors & Bioelectronics 22:3083-3086. doi:10.1016/j.bios.2007.01.012',
      'He et al. (2006) Water Research 40:127-134. doi:10.1016/j.watres.2005.11.002',
    ],
    dependencies: ['electrode_spacing_cell', 'ph_level', 'operating_temperature'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  electrode_spacing_cell: {
    references: [
      'Cheng et al. (2006) Electrochemistry Communications 8:489-494. doi:10.1016/j.elecom.2006.01.010',
      'Liu & Logan (2004) Environmental Science & Technology 38:4040-4046. doi:10.1021/es0499344',
    ],
    dependencies: ['internal_resistance', 'cell_volume'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  cell_volume: {
    references: [
      'Cheng & Logan (2011) Bioresource Technology 102:4468-4473. doi:10.1016/j.biortech.2010.12.104',
    ],
    dependencies: ['electrode_spacing_cell', 'hydraulic_retention_time'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  hydraulic_retention_time: {
    references: [
      'Min & Logan (2004) Environmental Science & Technology 38:5809-5814. doi:10.1021/es0491026',
      'Liu et al. (2005) Environmental Science & Technology 39:5488-5493. doi:10.1021/es050316c',
    ],
    dependencies: ['cell_volume', 'substrate_concentration'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  ph_level: {
    references: [
      'He et al. (2008) Water Research 42:3014-3020. doi:10.1016/j.watres.2008.04.010',
      'Gil et al. (2003) Biosensors & Bioelectronics 18:327-334. doi:10.1016/S0956-5663(02)00110-0',
    ],
    dependencies: ['operating_temperature', 'substrate_concentration'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  operating_temperature: {
    references: [
      'Liu et al. (2005) Environmental Science & Technology 39:5488-5493. doi:10.1021/es050316c',
      'Larrosa-Guerrero et al. (2010) Fuel 89:3985-3994. doi:10.1016/j.fuel.2010.06.025',
    ],
    dependencies: ['ph_level', 'biofilm_conductivity'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
  substrate_concentration: {
    references: [
      'Liu et al. (2005) Environmental Science & Technology 39:5488-5493. doi:10.1021/es050316c',
      'Min & Logan (2004) Environmental Science & Technology 38:5809-5814. doi:10.1021/es0491026',
    ],
    dependencies: ['coulombic_efficiency', 'hydraulic_retention_time', 'biofilm_thickness'],
    compatibility: { systemTypes: ['MFC', 'MEC', 'MDC', 'MES_general'] },
  },
};

function main() {
  const indexPath = path.resolve(__dirname, '..', 'parameters', 'index.json');
  const data = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

  let enriched = 0;

  for (const cat of data.categories) {
    for (const sub of cat.subcategories) {
      for (const param of sub.parameters) {
        const enrichment = enrichments[param.id];
        if (enrichment) {
          if (enrichment.references) param.references = enrichment.references;
          if (enrichment.dependencies) param.dependencies = enrichment.dependencies;
          if (enrichment.compatibility) param.compatibility = enrichment.compatibility;
          enriched++;
        }
      }
    }
  }

  fs.writeFileSync(indexPath, JSON.stringify(data, null, 2) + '\n', { encoding: 'utf-8' });
  console.log(`Enriched ${enriched} parameters with references, dependencies, and compatibility`);
  console.log(`Total parameters with references: ${enriched} / ${data.metadata.totalParameters}`);
}

main();
