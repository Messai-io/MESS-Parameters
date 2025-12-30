# Contributing to MESS-Parameters

Thank you for your interest in contributing to the MESS Parameter Standards!

## How to Contribute

### Adding a New Parameter

1. **Fork** this repository
2. **Create** a new branch: `git checkout -b add-parameter-[name]`
3. **Add** your parameter JSON file to the appropriate category folder
4. **Validate** using: `npm run validate`
5. **Submit** a Pull Request

### Parameter Format

All parameters must follow the JSON Schema in `schemas/parameter.schema.json`:

```json
{
  "id": "your_parameter_id",
  "name": "Human Readable Name",
  "category": "electrochemical",
  "unit": "V",
  "qudt_unit": "http://qudt.org/vocab/unit/V",
  "range": {
    "min": -1.0,
    "max": 1.0
  },
  "description": "Clear description of the parameter",
  "provenance": {
    "source": "doi:10.1016/j.xxx.2025.xxxxx",
    "contributor_orcid": "0000-0001-2345-6789",
    "added_date": "2025-01-15"
  }
}
```

### Requirements

- **ORCID Required**: All contributors must provide their ORCID
- **DOI Required**: Parameter sources must have valid DOIs
- **Unit Standards**: Use QUDT-compatible units
- **Range Validation**: Provide physically realistic ranges

### Validation

Run validation before submitting:

```bash
npm run validate
npm run validate:single -- parameters/electrochemical/your_param.json
```

### Code of Conduct

- Be respectful and constructive
- Focus on scientific accuracy
- Cite sources appropriately
- Respond to review feedback promptly

## Getting Help

- Open an [Issue](https://github.com/Messai-io/MESS-Parameters/issues)
- Join our [Discord](https://discord.gg/messai)
- Email: research@messai.io

## Recognition

All contributors are listed in CONTRIBUTORS.md and receive DOI credit in Zenodo releases.
