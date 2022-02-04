module.exports = {
async function (options, retries = 0) {
    let { imagePath, size, quality = 60, maxRetries = 5 } = options

    let image = null
    try {
        await image
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }

       image = await handler(options, retries++) }
    }

    return image
}
}
