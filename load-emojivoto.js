// Creator: k6 Browser Recorder 0.6.0

import { sleep, group, check } from 'k6'
import http from 'k6/http'

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    },
    scenarios: {
      ramping_arrival_scenario: {
        executor: 'ramping-arrival-rate',
        startRate: 300,
        timeUnit: '1m',
        preAllocatedVUs: 50,
        stages: [
          { target: 12000, duration: '1h' },
          { target: 18000, duration: '3h' },
          { target: 6000, duration: '4h' },
          { target: 60000, duration: '2h' },
        ],
      },
  },
};

export default async function () {
 let response

  group('page_8 - https://emojivoto.sandbox.hillghost.com/', function () {
    response = http.get('https://emojivoto.sandbox.hillghost.com/', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1',
      },
    })
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/list', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/leaderboard', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(2.2)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/list', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(2.2)
    response = http.get(
      'https://emojivoto.sandbox.hillghost.com/api/vote?choice=:jack_o_lantern:',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'sec-gpc': '1',
        },
      }
    )
    sleep(1.1)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/leaderboard', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(1.5)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/list', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(1.3)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/vote?choice=:mrs_claus:', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(2.5)
    response = http.get(
      'https://emojivoto.sandbox.hillghost.com/api/vote?choice=:heart_eyes_cat:',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'sec-gpc': '1',
        },
      }
    )
    sleep(1)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/leaderboard', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(1)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/list', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(1.2)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/vote?choice=:doughnut:', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
    sleep(1.8)
    response = http.get('https://emojivoto.sandbox.hillghost.com/api/leaderboard', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        dnt: '1',
        'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
      },
    })
  })
}
