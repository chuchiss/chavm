let handler = m => m

handler.before = function (m, { user }) {
setInterval(()=> {
let users = global.DATABASE.data.users;
users[m.sender].banned = false
console.log('desbloqueando usuario') 
}, 2000)
} 

module.exports = handler

