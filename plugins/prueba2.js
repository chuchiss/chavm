global.prueba[id] = ['']

let handler = async (m, { conn, text }) => {
global.prueba.push(`${text}\n`)
let id = m.chat
conn.reply(m.chat, `${global.prueba[id]}`, m)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(prueba2)$/i
handler.exp = 5
handler.admin = false
handler.premium = false
handler.group = false

module.exports = handler
