module.exports = async function retry(retries = 0) {
    let maxRetries = 10
let options = maxRetries
    try {
        await handler()
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await handler(options, retries++);
    }
   

    return image;
}


