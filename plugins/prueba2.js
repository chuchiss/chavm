global.prueba = ['']

let handler = async (m, { conn, text }) => {
let num = 0
let numu = (num + 1)
global.prueba.push(`${text}${numu}\n`)
conn.reply(m.chat, `${global.prueba}`, m)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(prueba2)$/i
handler.exp = 5
handler.admin = false
handler.premium = false
handler.group = false

module.exports = handler
