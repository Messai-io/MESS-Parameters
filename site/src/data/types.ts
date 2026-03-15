export interface ParameterRange {
  min: number;
  max: number;
  typical: number;
}

export interface Parameter {
  id: string;
  name: string;
  description: string;
  unit: string;
  type: string;
  category: string;
  subcategory: string;
  default: number;
  range: ParameterRange;
  tags: string[];
}

export interface Subcategory {
  id: string;
  name: string;
  parameterCount?: number;
  parameters?: Parameter[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

export interface ParameterIndex {
  metadata: {
    version: string;
    lastUpdated: string;
    totalParameters: number;
    majorCategories: number;
    subcategories: number;
  };
  categories: Category[];
}

export interface Correlation {
  parameter: string;
  metric: string;
  pearsonR: number;
  sampleSize: number;
  pValue: number;
  trend: string;
  strength: string;
}

export interface CorrelationCache {
  generatedAt: string;
  totalPapersAnalyzed: number;
  totalCorrelations: number;
  significantCorrelations: number;
  allCorrelations: Correlation[];
  summary: {
    strongPositive: number;
    strongNegative: number;
    moderate: number;
    weak: number;
  };
}

export interface ExtractionStats {
  generatedAt: string;
  corpus: {
    totalPapers: number;
    papersWithAbstracts: number;
    papersWithPDFs: number;
    papersWithFullText: number;
  };
  extraction: {
    totalExtractions: number;
    extractedParameterDataRows: number;
    paperParameterMappings: number;
    papersWithStructuredParameters: number;
    parameterDefinitions: number;
    categories: number;
    subcategories: number;
  };
  quality: {
    papersWithReproducibilityScores: number;
    averageReproducibilityCompleteness: number;
    papersWithEconomicMetrics: number;
    papersWithComputationalTags: number;
    papersWithAISummaries: number;
  };
  systemTypes: Record<string, number>;
}

export interface CriteriaCategory {
  weight: string;
  criteria: string[];
  averageReportingRate: number;
}

export interface ReproducibilitySummary {
  overview: {
    totalPapersScored: number;
    averageCompletenessPercent: number;
    medianCompletenessPercent: number;
    scoringCriteria: number;
  };
  criteriaCategories: Record<string, CriteriaCategory>;
  keyFindings: Record<string, string>;
  fiveParameterChecklist: {
    description: string;
    parameters: string[];
    validationStudy: {
      papersAnalyzed: number;
      iqrReductionPercent: number;
      pValue: string;
      conclusion: string;
    };
  };
}

export interface CategoryCount {
  id: string;
  name: string;
  count: number;
}
