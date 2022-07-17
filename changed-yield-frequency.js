const par = 1000
const ytm_01 = 0.07
const ytm_02 = ytm_01 + 0.015
const annual_frequency = 2
const time_to_maturity_01 = 9
const time_to_maturity_02 = 11
const rate = 0.05
const coupon_rate = par * rate

const annuity = (c, ytm, ttm, f) => {
  const coupon_value_with_yield = ((c / f) / (ytm / f))
  const annuity_rate = 1 - (1 / (1 + (ytm / f))**(ttm * f))
  return coupon_value_with_yield * annuity_rate
}

const par_value = (p, ytm, ttm, f) => {
  return p / (1 + (ytm / f))**(ttm * f)
}

const pk = annuity(coupon_rate, ytm_02, time_to_maturity_02, annual_frequency)
  + par_value(par, ytm_02, time_to_maturity_02, annual_frequency)

const result = annuity(coupon_rate, ytm_01, time_to_maturity_01, annual_frequency)
  + par_value(pk, ytm_01, time_to_maturity_01, annual_frequency)

console.log('Result:', result)