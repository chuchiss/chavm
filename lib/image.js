module.exports = async function(retries = 0) {
    let maxRetries = 5 
let options = maxRetries
    try {
        await image;
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        let image = await handler(options, retries++);
    }
   

    return image;
}


