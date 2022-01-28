const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch') 

let image = async function handler() {
    let retries = 0
    let maxRetries = 30
    let options = maxRetries
    try {
        return image;
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await handler(options, retries++);
    }
   

    return image;
}

exports.image = handler
