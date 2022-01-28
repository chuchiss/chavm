const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch') 

let image = async function handler(retries = 0) {
    let maxRetries = 30
    let options = maxRetries
    try {
        return image;
    } catch (e) {
        if (retries >= maxRetries) {
            return m.reply('error')
        }
                
        image = await handler(options, retries++);
    }
   

    return image;
}

module.exports = handler
