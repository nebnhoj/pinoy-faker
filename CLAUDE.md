# CLAUDE.md — pinoy-faker

A zero-dependency Node.js library for generating realistic Philippine test data.

## Repository Layout

```
pinoy-faker/
├── index.js              # Entry point: exports singleton Faker instance
├── modules/
│   ├── names/index.js    # Filipino first/last/full names
│   ├── contact/index.js  # PH mobile numbers, landlines, email addresses
│   ├── government/index.js  # TIN, SSS, PhilHealth, Pag-IBIG IDs
│   ├── location/index.js    # Regions, provinces, cities, barangays
│   └── foods/index.js       # Filipino dishes, street foods, desserts
└── test/
    └── faker.test.js     # Node built-in test runner suite
```

## Development Workflow

### Running Tests

```bash
npm test        # node --test
```

There is no build step. The library is plain CommonJS JavaScript and runs directly on Node >= 18.

### No Linter or Formatter Configured

There is no ESLint, Prettier, or TypeScript config. Keep code style consistent with the existing files (see Conventions below).

## Architecture

### Module Pattern

Each module is a class in `modules/<name>/index.js`. Every class follows the same pattern:

1. **Static data arrays** at the top (names, prefixes, places, etc.)
2. **Private helpers** inline or closured (e.g. `randomInt`, `randomFrom`, `randomDigits`)
3. **Public methods** that return generated data

All modules are instantiated once in `index.js` and exposed on the `Faker` singleton:

```js
const faker = require('pinoy-faker');

faker.names.fullName();
faker.contact.mobileNumber();
faker.government.tin();
faker.location.fullAddress();
faker.foods.food();
```

### Adding a New Module

1. Create `modules/<name>/index.js` exporting a class.
2. Instantiate it in `index.js`: `this.<name> = new MyClass();`
3. Add tests in `test/faker.test.js` using `describe` / `it` from `node:test`.

## Code Conventions

| Concern | Convention |
|---|---|
| Classes | PascalCase (`Names`, `Contact`) |
| Methods / variables | camelCase (`firstName`, `mobileNumber`) |
| Module format | CommonJS (`require` / `module.exports`) |
| Random selection | `randomFrom(array)` helper pattern |
| Array returns | Spread copy `[...sourceArray]` so callers can't mutate internals |
| Input normalisation | Accept both string and numeric inputs; lowercase / strip invalid chars before use |
| External dependencies | None — keep it that way unless there is a strong reason |

## Key Design Decisions

- **No external dependencies.** All data is bundled as plain JS arrays. Do not add npm dependencies without good justification.
- **Mock data only.** Generated IDs (TIN, SSS, etc.) are random and not validated against real government formats. Document this clearly for any new government ID generators.
- **CommonJS, not ESM.** Do not migrate to ES modules without updating all `require` calls and the package.json `"type"` field.
- **Node >= 18.** Built-in `node:test` is used for tests. Do not add external test frameworks (Jest, Mocha, etc.).

## Testing Conventions

Tests live in `test/faker.test.js` and use `node:test` + `node:assert/strict`.

- **Format verification tests** use regex (e.g. `/^09\d{9}$/` for mobile numbers).
- **Content tests** use `assert.ok(array.includes('expected value'))`.
- **Structural tests** check that returned objects have the expected keys.

When adding a new method, add a corresponding test that validates the output format or expected values.

## Data Coverage

| Module | What it generates |
|---|---|
| `names` | Filipino first names (male/female), last names, full names |
| `contact` | PH mobile (09XXXXXXXXX), landline (area-XXXXXXX), email |
| `government` | TIN (XXX-XXX-XXX-XXX), SSS (XX-XXXXXXX-X), PhilHealth (XX-XXXXXXXXX-X), Pag-IBIG (XXXX-XXXX-XXXX) |
| `location` | 17 regions, provinces per region, cities per province, barangays per city, `fullAddress()` object |
| `foods` | Dishes, street foods, desserts — individual random item or full array |

## Git Branching

The default branch is `master`. Feature work is done in topic branches; see open PRs for current convention.
