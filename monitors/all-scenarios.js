const fs = require('fs');
const path = require('path');
const { performance } = require('node:perf_hooks');

const { chromium } = require('playwright');

const filesPath = path.join(__dirname, '..', 'scenarios');
const files = fs.readdirSync(filesPath);

files.forEach((file) => {
    (async () => {
        const filePath = path.join(filesPath, file);
        const { scenario } = require(filePath);
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        const start = performance.now();

        await scenario.run({ page, baseURL: process.env.TARGET_URL });

        const end = performance.now();
        const duration = end - start;
    
        console.log(`Scenario: "${scenario.name}" took ${Math.floor(duration)}ms`);

        await browser.close();
    })();
});

    

