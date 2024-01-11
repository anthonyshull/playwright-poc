### Setup

Both Playwright and Artillery need a target URL to be set.

```
%> export TARGET_URL=http://localhost:4001
```

### Playwright

```
%> npx playwright test all-scenarios
```

### Artillery

Run all scenarios in a load test:

```
%> npx artillery run load-tests/all-scenarios.yml --target $TARGET_URL
```