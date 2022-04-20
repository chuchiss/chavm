module.exports = async function shony(retries = 0) {
    let options = { maxRetries = 5 }
   let image = null;
    try {
        await shony;
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        shony = await handler(options, retries++);
    }
   

    return
}


