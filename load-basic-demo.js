// Creator: k6 Browser Recorder 0.6.0

import { sleep, group, check } from 'k6'
import http from 'k6/http'
import { chromium } from 'k6/experimental/browser';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    },
    scenarios: {
      ramping_arrival_scenario: {
        executor: 'ramping-arrival-rate',
        startRate: 100,
        timeUnit: '1m',
        preAllocatedVUs: 5,
        stages: [
          { target: 200, duration: '1h' },
          { target: 500, duration: '3h' },
          { target: 400, duration: '4h' },
          { target: 60, duration: '2h' },
        ],
      },
  },
};

export default async function () {
    const browser = chromium.launch(
      {
        headless: true,
        timeout: '1m'
      }
    );
    const page = browser.newPage();

    try {
      await page.goto('https://demo.sandbox.hillghost.com/');
    } finally {
      page.close();
      browser.close();
    }
}
