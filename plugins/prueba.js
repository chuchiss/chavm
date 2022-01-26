let handler = m => m

handler.before = async function (m, { conn, users } ) {
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 8) {
                global.DATABASE._data.users[m.sender].banned = true
                m.reply('*No agas Spam!!*')
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
function desblock() {
global.DATABASE._data.users[m.sender].banned = false
}
setTimeout(desblock, 16000)
}

module.exports = handler 


