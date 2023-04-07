export default defineEventHandler(async(event) => {
    
    const { name } = getQuery(event)

    const { text } = await readBody(event)

    //Frontend use useFetch(), Server Route use $fetch instead
    //Some third party APIs require our private key
    //By using server route able to prevent for exposing our private key

    const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=OSqEGFwxSesiM3vtfrOu0LRoGsfWFyAFOGBHGMfl")

    const variable = data.MYR

    return {
        message: `Hello from ${name} ${text}`,
        variable
    }
})