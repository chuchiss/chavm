let handler = async (m, { conn, isPrems, isOwner, text, user, usedPrefix }) => {
    conn.twit = conn.twit ? conn.twit : {}
    let id = m.all
    if ( global.DATABASE._data.users[m.sender].limit < 1) return m.reply('minimo 10 limits')
     if (text) (/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/.exec(m.text)) return
    if (!text) return m.reply('twit vacío!  .twittear esto es un ejemplo')
    m.reply(`¡twuiteado !\n*${usedPrefix}twits  para ver los twits`)
    conn.twit[id] = [
        text,
        [],
        [],
        []
    ]
if (!isPrems && !isOwner) global.DATABASE._data.users[m.sender].limit -= 30
}
handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(tw|(twit|twi)tear)$/i
handler.limit = true
handler.group = false
handler.admin = false
module.exports = handler
