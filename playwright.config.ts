import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 240000,
    globalTimeout: 18000000,
    testDir: "./tests",
    reporter: [
        ["list"],
        ["junit", {outputFile: "reports/test-results.xml"}],
        ["allure-playwright"],
        ["json", {outputFile: "reports/test-results.json"}],
        ["html", {open: "never"}],
    ],
    use: {
        browserName: "chromium",
        actionTimeout: 30000,
        trace: "off",
        screenshot: "on",
        viewport: {width: 1400, height: 900},
        video: {
            mode: "retain-on-failure",
            size: {
                //Like in our project
                width: 1400,
                height: 900,
            },
        },
        contextOptions: {
            ignoreHTTPSErrors: true,
        },
        // Browser options
        launchOptions: {
            channel: "chrome",
            headless: process.env.CI ? true : false,
            slowMo: 200,
            args: [
                "--no-sandbox",
                "--ignore-certificate-errors",
                "--ignore-certificate-errors-skip-list",
            ],
        },
    },
};

export default config;
