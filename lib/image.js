const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch') 

module.exports = async imagen => {
    let retries = 0
    let maxRetries = 30
    let options = maxRetries
   let image = null
    try {
console.log('solucionado con image')
        return imagene()
    } catch (e) {
        if (retries >= maxRetries) {
            return }
               
      function imagene() { 
        image = await handler(options, retries++)
}
}
return image;
}

