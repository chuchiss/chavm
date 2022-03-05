let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.all
    m.reply(`¡twuiteado !\n*${usedPrefix}si* - para si\n*${usedPrefix}no* - para no\n*${usedPrefix}chekear* - para chekear el voto\n*${usedPrefix}borrarvotacion* - para eliminar`)
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
