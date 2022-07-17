const par = 1000
const ytm_01 = 0.011
const ytm_02 = 0.011 + 0.004
const annual_frequency = 1
const time_to_maturity_01 = 15
const time_to_maturity_02 = 15
const rate = 0.025
const coupon_rate = par * rate

const annuity = (c, ytm, ttm) => {
  const coupon_value_with_yield = c / ytm
  const annuity_rate = 1 - (1 / (1 + ytm)**ttm)
  return coupon_value_with_yield * annuity_rate
}

const par_value = (p, ytm, ttm) => {
  return p / (1 + ytm)**ttm
}

const pk = annuity(coupon_rate, ytm_02, time_to_maturity_02)
  + par_value(par, ytm_02, time_to_maturity_02)

const result = annuity(coupon_rate, ytm_01, time_to_maturity_01)
  + par_value(pk, ytm_01, time_to_maturity_01)

console.log('Result:', result)