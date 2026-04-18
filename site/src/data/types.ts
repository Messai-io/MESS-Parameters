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
    version?: string;
    lastUpdated?: string;
    totalParameters?: number;
    majorCategories?: number;
    subcategories?: number;
    [key: string]: unknown;
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
  generatedAt?: string;
  totalPapersAnalyzed?: number;
  totalCorrelations?: number;
  significantCorrelations?: number;
  allCorrelations?: Correlation[];
  summary?: {
    strongPositive?: number;
    strongNegative?: number;
    moderate?: number;
    weak?: number;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface ExtractionStats {
  generatedAt?: string;
  corpus?: {
    totalPapers?: number;
    [key: string]: unknown;
  };
  extraction?: {
    paperParameterMappings?: number;
    parameterDefinitions?: number;
    categories?: number;
    subcategories?: number;
    [key: string]: unknown;
  };
  quality?: {
    papersWithReproducibilityScores?: number;
    [key: string]: unknown;
  };
  systemTypes?: Record<string, number>;
  [key: string]: unknown;
}

export interface CriteriaCategory {
  weight?: string;
  criteria?: string[];
  averageReportingRate?: number;
  [key: string]: unknown;
}

export interface ReproducibilitySummary {
  overview?: {
    totalPapersScored?: number;
    averageCompletenessPercent?: number;
    medianCompletenessPercent?: number;
    scoringCriteria?: number;
    [key: string]: unknown;
  };
  criteriaCategories?: Record<string, CriteriaCategory>;
  keyFindings?: Record<string, string>;
  fiveParameterChecklist?: {
    description?: string;
    parameters?: string[];
    validationStudy?: {
      papersAnalyzed?: number;
      iqrReductionPercent?: number;
      pValue?: string;
      conclusion?: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface CategoryCount {
  id: string;
  name: string;
  count: number;
}
