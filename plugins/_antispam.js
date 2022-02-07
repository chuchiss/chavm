let handler = m => m

handler.before = function (m, { user }) {
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 6) {
            if (this.spam[m.sender].count > 6) {
                let users = global.DATABASE._data.users
                users[m.sender].banned = true
               setTimeout(()=> {
let users = global.DATABASE._data.users
users[m.sender].banned = false
console.log('desbloqueado al usuario') 
}, 120000)
//m.reply('baneado por 20 minutos..')
                this.spam[m.sender].count-- 
                this.spam[m.sender].lastspam--

            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler 

