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

export default function main() {
  let target=`${__ENV.TARGET}`
  let response

  group('page_1 - https://$target/', function () {
    response = http.get(`https://${target}`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/ihop`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`https://${target}/api/chipotle`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`https://${target}/api/bucadibeppo`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`https://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`https://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`https://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`https://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`https://${target}/api/chipotle`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`https://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
  })
}
