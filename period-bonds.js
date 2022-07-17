const par = 1000
const ytm = 0.06
const annual_frequency = 4
const t = 20
const c = par * 0.09

const coupon_rate = (c / annual_frequency) / (ytm / annual_frequency)
const yield_to_maturity = (1 - (1 / (1 + (ytm / annual_frequency)) ** (t * annual_frequency)))
const par_value = (par / (1 + (ytm / annual_frequency)) ** (t * annual_frequency))

const result = (coupon_rate * yield_to_maturity) + par_value

console.log('Result:', result)