
module.exports = { 
async function handler(retries = 0) {
    let maxRetries = 30
    let options = maxRetries
   let image = null
    try {
        return image
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await handler(options, retries++);
    }
   

    return image
}

module.exports = handler
