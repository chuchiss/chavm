let handler = m => m

handler.before = function (m, { user }) {
if (new Date - global.DATABASE._data.users[m.sender].afk > 8000) {
let users = global.DATABASE.data.users
                users[m.sender].banned = false
console.log('desbloqueado a los usuarios') 
global.DATABASE._data.users[m.sender].afk = new Date * 1
} 

module.exports = handler
