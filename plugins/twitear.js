let handler = async (m, { conn, text, usedPrefix }) => {
    conn.twit = conn.twit ? conn.twit : {}
    let id = m.all
    let san = text
    if (!text) return m.reply('twit vacío!  .twittear esto es un ejemplo')
    m.reply(`¡twuiteado !\n*${usedPrefix}twits  para ver los twits`)
    conn.twit[id] = [
        text.join,
        [],
        []
    ]
}
handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(twit|twi)tear$/i
handler.limit = true
handler.group = false
handler.admin = false
module.exports = handler
