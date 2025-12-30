# MESS-Parameters

**The definitive parameter standard for Microbial Electrochemical Systems (MES) research**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

## Overview

MESS-Parameters provides a comprehensive, community-driven database of standardized parameters for MES research including:

- **687 parameters** across 18 categories
- **FAIR-compliant** metadata with provenance tracking
- **QUDT units** for interoperability
- **JSON Schema** validation
- **DOI-linked references** for all parameters

## Parameter Categories

| Category | Parameters | Description |
|----------|------------|-------------|
| Biological | 45+ | Microbial growth, biofilm formation |
| Electrochemical | 60+ | Potentials, currents, efficiencies |
| Operational | 40+ | pH, temperature, flow rates |
| Performance | 55+ | Power density, COD removal |
| Reactor Design | 35+ | Chamber volumes, electrode spacing |
| Substrate | 30+ | Organic loads, concentrations |
| Product | 25+ | Hydrogen, methane yields |
| Microbial | 50+ | Species, community composition |
| Environmental | 20+ | DO, conductivity |
| Economic | 15+ | Cost, ROI metrics |
| Materials | 40+ | Electrode, membrane specs |
| Analytical | 35+ | Measurement techniques |
| Transport | 25+ | Mass transfer coefficients |
| Kinetic | 45+ | Rate constants, Monod params |
| Thermodynamic | 30+ | Gibbs energy, enthalpies |
| Membrane | 20+ | Ion exchange, proton flux |
| Mass Transfer | 25+ | kLa, diffusion |
| Energy | 20+ | Efficiency, consumption |

## Installation

```bash
npm install @messai-io/mess-parameters
# or
pip install mess-parameters
```

## Quick Start

```javascript
import { getParameter, validateParameter } from '@messai-io/mess-parameters';

// Get a parameter definition
const powerDensity = getParameter('power_density_areal');
console.log(powerDensity.unit); // W/m²
console.log(powerDensity.range); // { min: 0, max: 10000 }

// Validate a parameter value
const isValid = validateParameter('power_density_areal', 150.5);
```

```python
from mess_parameters import get_parameter, validate_parameter

# Get a parameter definition
power_density = get_parameter('power_density_areal')
print(power_density['unit'])  # W/m²

# Validate a parameter value
is_valid = validate_parameter('power_density_areal', 150.5)
```

## Schema

All parameters follow the JSON Schema defined in `schemas/parameter.schema.json`:

```json
{
  "id": "power_density_areal",
  "name": "Areal Power Density",
  "category": "performance",
  "unit": "W/m²",
  "qudt_unit": "http://qudt.org/vocab/unit/W-PER-M2",
  "range": { "min": 0, "max": 10000 },
  "description": "Power output per unit electrode area",
  "provenance": {
    "source": "doi:10.1016/j.biortech.2020.123456",
    "contributor_orcid": "0000-0001-2345-6789",
    "added_date": "2025-01-15"
  }
}
```

## Contributing

We welcome contributions from the MES research community!

1. Fork this repository
2. Add your parameter to the appropriate category folder
3. Validate using `npm run validate`
4. Submit a Pull Request with your ORCID

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Citation

```bibtex
@misc{mess_parameters_2025,
  author = {{MESSAI Community}},
  title = {{MESS Parameter Standards v1.0}},
  year = {2025},
  publisher = {MESSAI},
  doi = {10.5281/zenodo.XXXXXXX}
}
```

## License

This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Links

- [MESSAI Platform](https://messai.io)
- [Documentation](https://docs.messai.io/parameters)
- [Issue Tracker](https://github.com/Messai-io/MESS-Parameters/issues)
