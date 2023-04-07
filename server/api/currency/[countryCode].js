export default defineEventHandler(async (event) => {

    const { countryCode } = event.context.params
    const { currenciesKey } = useRuntimeConfig()
  
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${countryCode}&apikey=${currenciesKey}`
    
    const { data } = await $fetch(uri)
  
    return data
  })