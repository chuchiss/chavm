let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.reply(m.chat, `no hay votaciones! para crear una votacion pone .votar`, m)
    delete conn.vote[id]
    m.reply(`Listo votacion eliminada!`)

}
handler.help = []
handler.tags = []
handler.command = /^(borrartw)$/i
handler.group = true
handler.owner = true
module.exports = handler
