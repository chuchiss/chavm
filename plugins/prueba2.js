let handler = m => m

handler.before = function (m, { user }) {
    function desblock() {
let users = global.DATABASE.data.users
                users[m.sender].banned = false
}

setTimeout (desblock, 2222)
}

module.exports = handler
