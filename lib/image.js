module.exports = async handler(retries = 0) {
    let { maxRetries = 5 } = options;
   let image = null
    try {
        return
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await handler(options, retries++);
    }
   

    return image
}
