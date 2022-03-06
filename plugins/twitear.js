let handler = async (m, { conn, isPrems, isOwner, text, user, usedPrefix }) => {
    conn.twit = conn.twit ? conn.twit : {}
    let id = m.all
    global.DATABASE._data.users[m.sender].limit -= 10
     if (/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/.exec(m.text)) return
    if (!text) return m.reply('twit vacío!  .twittear esto es un ejemplo')
    m.reply(`¡twuiteado !\n*${usedPrefix}twits  para ver los twits`)
    conn.twit[id] = [
        text,
        [],
        [],
        []
    ]
global.DATABASE._data.users[m.sender].limit -= 10
}
handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(tw|(twit|twi)tear)$/i
handler.limit = true
handler.group = false
handler.admin = false
module.exports = handler
