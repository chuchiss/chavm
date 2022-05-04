module.exports = async function(retries = 0) {
    let maxRetries = 5 
let options = maxRetries
   
   let image = null;
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


