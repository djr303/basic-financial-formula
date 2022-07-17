const P = 739.19
const par = 1000
const t = 30
const YTM = 0.11

const x = (1 - (1 / (1 + YTM)**t))
const y = (par / ((1 + YTM)**t))

const result = ((P - y) / x)*YTM

console.log('Result:', result)
