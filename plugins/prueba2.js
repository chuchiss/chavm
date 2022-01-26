function desblock() {
let users = global.DATABASE.data.users
                users[m.sender].banned = false
}
function spam() {
this.spam[m.sender].count--
}

setTimeout (desblock, 22000)
setTimeout (spam, 11000)
