module.exports = async function handler(retries = 0) {
    let { maxRetries = 5 } = options;
   let image = null
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
