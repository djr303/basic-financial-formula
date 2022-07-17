const P = 1000
const YTM = 0.10
const C = P * 0.08
const t = 3

let result = 0 

for (let i = 1; i <= t; i++){
  let x = (C / (1+YTM)**i)
  result = result + x
}

result = result + (P / (1 + YTM)**t)

console.log('Result: ', result)
