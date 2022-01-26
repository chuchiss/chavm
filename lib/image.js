
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch') 

module.exports = async function retry(retries = 0) {
    let maxRetries = 30
    let options = maxRetries
   let image = null
    try {
console.log('tdjdjskkdkfkfkdkdkdu2837737373')
        return retry()
    } catch (e) {
       image = await retry(options, retries++)
        if (retries >= maxRetries) {
            throw e;
}
    return image;
}
