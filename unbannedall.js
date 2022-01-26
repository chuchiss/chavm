
const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let users = global.DATABASE.data.users;
users[m.sender].banned = false
console.log('desbloqueando usuario') 
}
handler.help = ['unbnall']
handler.tags = ['owner']
handler.command = /^unbanall?$/i
handler.limit = false
handler.rowner = true

module.exports = handler
