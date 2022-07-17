const P = 1000
const YTM = 0.08
const C = 50
const t = 20

let result = 0

result = (C / YTM) * (1 - (1 / (1 + YTM) ** t)) + (P / (1 + YTM) ** t)

console.log('Result:', result)