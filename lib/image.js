module.exports = async function handler(retries = 0) {
    let maxRetries = 10
let options = maxRetries
    try {
        await image;
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await handler(options, retries++);
    }
   

    return image;
}


