### Setup

Set the target URL.

```
%> export TARGET_URL=http://localhost:4001
```

### Playwright

Run all scenarios as E2E tests:

```
%> npx playwright test all-scenarios
```

### Artillery

Run all scenarios as a load test:

```
%> npx artillery run load-tests/all-scenarios.yml --target $TARGET_URL
```

### Monitor

Run all scenarios as a monitor:

```
%> node monitors/all-scenarios.js
```