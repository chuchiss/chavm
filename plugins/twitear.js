let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.all
    m.reply(`¡twuiteado !\n*${usedPrefix}twits  para ver los twits`)
    conn.vote[id] = [
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
