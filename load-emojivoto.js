// Creator: k6 Browser Recorder 0.6.0

import { sleep, group, check } from 'k6'
import http from 'k6/http'
import { chromium } from 'k6/experimental/browser';

export const options = { vus: 1, iterations: '1' }

export default async function () {
    const browser = chromium.launch({ headless: true });
    const page = browser.newPage();


    try {
        await page.goto('https://emojivoto.sandbox.hillghost.com');

        const emoji = page.locator("//div[starts-with(text(),'💩')]");
        const pickAnother = "//div[starts-with(text(), 'Pick another one')]"
        const leaderboard = page.locator('a[href="/leaderboard"]');

        emoji.click();
        page.waitForSelector(pickAnother)

        await leaderboard.click()

        await page.waitForNavigation()
        check(page, {
            header: page.locator('.emoji-list'),
        });
    } finally {
        page.close();
        browser.close();
    }
}
