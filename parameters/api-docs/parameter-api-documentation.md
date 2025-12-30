# MES Parameter Library API Documentation

## API Overview

The MES Parameter Library API provides programmatic access to the comprehensive
database of 687 parameters for Microbial Electrochemical Systems. This RESTful
API supports various operations including parameter retrieval, correlation
analysis, and system-specific queries.

## Base URL

```
Production: https://api.messai.ai/v1
Development: https://dev-api.messai.ai/v1
Local: http://localhost:3000/api/v1
```

## Authentication

API authentication is required for write operations and rate-limited access.

### API Key Authentication

```http
GET /api/v1/parameters
Authorization: Bearer YOUR_API_KEY
```

### Rate Limits

- Public Access: 100 requests/hour
- Authenticated: 1000 requests/hour
- Premium: 10000 requests/hour

## Endpoints

### 1. List All Parameters

Retrieve a paginated list of all parameters in the database.

**Endpoint:** `GET /api/v1/parameters`

**Query Parameters:** | Parameter | Type | Description | Default |
|-----------|------|-------------|---------| | page | integer | Page number | 1
| | limit | integer | Items per page (max 100) | 20 | | category | string |
Filter by category | - | | system | string | Filter by system (MFC/MEC/MDC) | -
| | priority | string | Filter by priority | - | | search | string | Search
query | - |

**Example Request:**

```bash
curl -X GET "https://api.messai.ai/v1/parameters?page=1&limit=20&system=MFC" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example Response:**

```json
{
  "status": "success",
  "data": {
    "parameters": [
      {
        "id": "param_001",
        "name": "Power Density",
        "category": "Performance",
        "subcategory": "Power Output",
        "unit": "W/m²",
        "description": "Power output per unit electrode surface area",
        "systems": ["MFC", "MDC"],
        "priority": "critical",
        "tags": ["performance", "output", "critical"],
        "created_at": "2024-01-15T10:00:00Z",
        "updated_at": "2025-01-20T14:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 687,
      "pages": 35
    }
  }
}
```

### 2. Get Parameter by ID

Retrieve detailed information about a specific parameter.

**Endpoint:** `GET /api/v1/parameters/{id}`

**Path Parameters:** | Parameter | Type | Description |
|-----------|------|-------------| | id | string | Parameter ID |

**Example Request:**

```bash
curl -X GET "https://api.messai.ai/v1/parameters/param_001" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example Response:**

```json
{
  "status": "success",
  "data": {
    "id": "param_001",
    "name": "Power Density",
    "category": "Performance",
    "subcategory": "Power Output",
    "unit": "W/m²",
    "description": "Power output per unit electrode surface area",
    "systems": ["MFC", "MDC"],
    "priority": "critical",
    "range": {
      "min": 0,
      "max": 10,
      "optimal": 3.5
    },
    "measurement_methods": [
      {
        "method": "Polarization Curve",
        "standard": "ASTM G5",
        "accuracy": "±5%"
      }
    ],
    "correlations": [
      {
        "parameter_id": "param_002",
        "parameter_name": "Current Density",
        "coefficient": 0.92,
        "confidence": 98,
        "type": "positive"
      }
    ],
    "references": [
      {
        "doi": "10.1016/j.bios.2024.115234",
        "title": "Optimization of power density in MFCs",
        "year": 2024
      }
    ],
    "tags": ["performance", "output", "critical"],
    "metadata": {
      "data_points": 1523,
      "last_validation": "2025-01-15",
      "confidence_level": 0.95
    }
  }
}
```

### 3. Search Parameters

Search parameters using full-text search across multiple fields.

**Endpoint:** `GET /api/v1/parameters/search`

**Query Parameters:** | Parameter | Type | Description |
|-----------|------|-------------| | q | string | Search query (required) | |
fields | string | Comma-separated fields to search | | limit | integer | Max
results (default: 20) |

**Example Request:**

```bash
curl -X GET "https://api.messai.ai/v1/parameters/search?q=biofilm&fields=name,description,tags" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 4. Get Parameter Correlations

Retrieve correlation data for a specific parameter.

**Endpoint:** `GET /api/v1/parameters/{id}/correlations`

**Query Parameters:** | Parameter | Type | Description |
|-----------|------|-------------| | threshold | float | Minimum correlation
coefficient | | type | string | positive/negative/all | | system | string |
Filter by system |

**Example Response:**

```json
{
  "status": "success",
  "data": {
    "parameter_id": "param_001",
    "parameter_name": "Power Density",
    "correlations": [
      {
        "parameter_id": "param_002",
        "parameter_name": "Current Density",
        "coefficient": 0.92,
        "confidence": 98,
        "type": "positive",
        "systems": ["MFC", "MDC"],
        "sample_size": 523
      }
    ],
    "total_correlations": 45,
    "strong_positive": 12,
    "strong_negative": 8
  }
}
```

### 5. Get Parameters by Category

Retrieve all parameters within a specific category.

**Endpoint:** `GET /api/v1/categories/{category}/parameters`

**Path Parameters:** | Parameter | Type | Description |
|-----------|------|-------------| | category | string | Category name |

### 6. Get System-Specific Parameters

Retrieve parameters applicable to a specific system type.

**Endpoint:** `GET /api/v1/systems/{system}/parameters`

**Path Parameters:** | Parameter | Type | Description |
|-----------|------|-------------| | system | string | System type (MFC/MEC/MDC)
|

### 7. Bulk Parameter Retrieval

Retrieve multiple parameters by their IDs.

**Endpoint:** `POST /api/v1/parameters/bulk`

**Request Body:**

```json
{
  "ids": ["param_001", "param_002", "param_003"],
  "include": ["correlations", "references", "metadata"]
}
```

### 8. Parameter Statistics

Get statistical information about parameters.

**Endpoint:** `GET /api/v1/parameters/stats`

**Example Response:**

```json
{
  "status": "success",
  "data": {
    "total_parameters": 687,
    "by_category": {
      "Operational": 127,
      "Performance": 89,
      "Biological": 76,
      "Materials": 94,
      "Electrochemical": 68
    },
    "by_system": {
      "MFC": 412,
      "MEC": 389,
      "MDC": 367,
      "Universal": 287
    },
    "by_priority": {
      "critical": 89,
      "high": 156,
      "medium": 298,
      "low": 144
    },
    "last_updated": "2025-01-22T00:00:00Z",
    "data_points": 487293,
    "correlations_mapped": 12456
  }
}
```

### 9. Export Parameters

Export parameters in various formats.

**Endpoint:** `GET /api/v1/parameters/export`

**Query Parameters:** | Parameter | Type | Description |
|-----------|------|-------------| | format | string | json/csv/excel | |
category | string | Filter by category | | system | string | Filter by system |

### 10. Parameter History

Get historical changes for a parameter.

**Endpoint:** `GET /api/v1/parameters/{id}/history`

**Example Response:**

```json
{
  "status": "success",
  "data": {
    "parameter_id": "param_001",
    "changes": [
      {
        "timestamp": "2025-01-20T14:30:00Z",
        "field": "optimal_range",
        "old_value": 3.2,
        "new_value": 3.5,
        "reason": "Updated based on new research",
        "reference": "DOI: 10.1016/j.bios.2024.115234"
      }
    ]
  }
}
```

## WebSocket API

### Real-time Parameter Updates

Connect to receive real-time parameter updates.

**Endpoint:** `wss://api.messai.ai/v1/ws`

**Subscription Message:**

```json
{
  "action": "subscribe",
  "channels": ["parameters", "correlations"],
  "filters": {
    "systems": ["MFC"],
    "categories": ["Performance"]
  }
}
```

**Update Message:**

```json
{
  "type": "parameter_update",
  "data": {
    "parameter_id": "param_001",
    "field": "value",
    "new_value": 3.8,
    "timestamp": "2025-01-22T10:15:00Z"
  }
}
```

## GraphQL API

### Schema

```graphql
type Query {
  parameter(id: ID!): Parameter
  parameters(
    page: Int
    limit: Int
    filter: ParameterFilter
    sort: ParameterSort
  ): ParameterConnection
  searchParameters(query: String!): [Parameter!]!
  correlations(parameterId: ID!, threshold: Float): [Correlation!]!
}

type Parameter {
  id: ID!
  name: String!
  category: String!
  subcategory: String!
  unit: String
  description: String!
  systems: [SystemType!]!
  priority: Priority!
  range: Range
  correlations: [Correlation!]!
  references: [Reference!]!
  measurements: [Measurement!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Correlation {
  parameter: Parameter!
  coefficient: Float!
  confidence: Float!
  type: CorrelationType!
  sampleSize: Int!
}

input ParameterFilter {
  category: String
  system: SystemType
  priority: Priority
  search: String
}

enum SystemType {
  MFC
  MEC
  MDC
  ALL
}

enum Priority {
  CRITICAL
  HIGH
  MEDIUM
  LOW
}
```

### Example Query

```graphql
query GetParameter {
  parameter(id: "param_001") {
    id
    name
    category
    correlations(threshold: 0.7) {
      parameter {
        name
      }
      coefficient
      confidence
    }
  }
}
```

## Error Handling

### Error Response Format

```json
{
  "status": "error",
  "error": {
    "code": "PARAMETER_NOT_FOUND",
    "message": "Parameter with ID 'param_999' not found",
    "details": {
      "parameter_id": "param_999",
      "suggestion": "Check parameter ID or use search endpoint"
    }
  }
}
```

### Error Codes

| Code                | HTTP Status | Description                 |
| ------------------- | ----------- | --------------------------- |
| PARAMETER_NOT_FOUND | 404         | Parameter ID does not exist |
| INVALID_REQUEST     | 400         | Request validation failed   |
| UNAUTHORIZED        | 401         | Missing or invalid API key  |
| FORBIDDEN           | 403         | Insufficient permissions    |
| RATE_LIMIT_EXCEEDED | 429         | Too many requests           |
| INTERNAL_ERROR      | 500         | Server error                |

## SDK Libraries

### JavaScript/TypeScript

```bash
npm install @messai/parameters-sdk
```

```typescript
import { ParametersClient } from '@messai/parameters-sdk';

const client = new ParametersClient({
  apiKey: 'YOUR_API_KEY',
  environment: 'production',
});

// Get parameter
const parameter = await client.parameters.get('param_001');

// Search parameters
const results = await client.parameters.search({
  query: 'biofilm',
  systems: ['MFC'],
  limit: 10,
});

// Get correlations
const correlations = await client.parameters.getCorrelations('param_001', {
  threshold: 0.7,
  type: 'positive',
});
```

### Python

```bash
pip install messai-parameters
```

```python
from messai_parameters import ParametersClient

client = ParametersClient(api_key='YOUR_API_KEY')

# Get parameter
parameter = client.parameters.get('param_001')

# Search parameters
results = client.parameters.search(
    query='biofilm',
    systems=['MFC'],
    limit=10
)

# Get correlations
correlations = client.parameters.get_correlations(
    'param_001',
    threshold=0.7
)
```

## Webhooks

### Configuration

Register webhook endpoints to receive parameter updates.

**Endpoint:** `POST /api/v1/webhooks`

**Request Body:**

```json
{
  "url": "https://your-app.com/webhook",
  "events": ["parameter.updated", "parameter.created"],
  "filters": {
    "categories": ["Performance"],
    "systems": ["MFC"]
  },
  "secret": "your_webhook_secret"
}
```

### Webhook Payload

```json
{
  "event": "parameter.updated",
  "timestamp": "2025-01-22T10:15:00Z",
  "data": {
    "parameter": {
      "id": "param_001",
      "name": "Power Density",
      "changes": {
        "optimal_range": {
          "old": 3.2,
          "new": 3.5
        }
      }
    }
  },
  "signature": "sha256=..."
}
```

## Best Practices

### Caching

- Cache parameter data for 1 hour
- Cache correlation data for 24 hours
- Use ETags for conditional requests

### Pagination

- Default page size: 20 items
- Maximum page size: 100 items
- Use cursor-based pagination for large datasets

### Performance

- Use field selection to reduce payload size
- Batch requests when possible
- Implement exponential backoff for retries

### Security

- Always use HTTPS
- Rotate API keys regularly
- Validate webhook signatures
- Implement rate limiting on client side

## Migration Guide

### From v0 to v1

- Parameter IDs changed from numeric to string format
- Correlation endpoint moved from `/correlations` to
  `/parameters/{id}/correlations`
- Authentication now required for all endpoints
- Response format standardized with `status` and `data` fields

## Support

### Resources

- API Status: https://status.messai.ai
- Documentation: https://docs.messai.ai/api
- Support: api-support@messai.ai
- GitHub: https://github.com/messai-ai/api-docs

### Rate Limit Headers

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642876800
```

---

_API Version: 1.0.0 | Last Updated: January 2025_
