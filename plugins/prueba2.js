let handler = m => m

handler.before = function (m, { user }) {
    function desblock() {
let users = global.DATABASE.data.users
                users[m.sender].banned = false
console.log('desbloqueado a los usuarios') 
clearTimeout()
}
 setInterval(desblock, 10018)
} 

module.exports = handler

