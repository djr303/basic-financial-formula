const par = 100
const C = 0.092 * par

// Note: Not sure what suitable T is here.
const t = 5
const ytm = 0.119


let result = 0

for (let i = 1; i <= t; i++){
  let x = (C / ((1 + ytm)**i))
  console.log('i,x',i, x)
  result = result + x
}

console.log('Post sum value:', result)

result = result + (par / ((1 + ytm)**t))

console.log('Result:', result)
