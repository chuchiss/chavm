let handler = async (m, { conn, text, usedPrefix }) => {
    conn.twit = conn.twit ? conn.twit : {}
    let id = m.all
    m.reply(`¡twuiteado !\n*${usedPrefix}twits  para ver los twits`)
    conn.twit[id] = [
        text,
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
