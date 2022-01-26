let handler = m => m

handler.before = function (m, { user }) {
    function desblock() {
let users = global.DATABASE.data.users
                users[m.sender].banned = false
console.log('desbloqueado a los usuarios') return !0
}
 setTimeout(desblock, 10018)
return 0!
} 

module.exports = handler

