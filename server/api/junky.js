export default defineEventHandler(async (event) => {
    
    // handle query params
    const { name } = getQuery(event)

    //handle post data
    const {age} = await readBody(event)

    //api call with pvt key
    // const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=yzmp90w09GDCeT6jmrXmAVz0D0ZbLDCXZ0SyqIwn')

    return {
        message: `Hello ${name}! Your age is ${age} years.`
    }
})