let handler = m => m

handler.before = function (m, { user }) {
    function desblock() {
let users = global.DATABASE.data.users
                users[m.sender].banned = false
console.log('desbloqueado a los usuarios') 
clearInterval()
}
 setInterval(desblock, 30018)
} 

module.exports = handler

