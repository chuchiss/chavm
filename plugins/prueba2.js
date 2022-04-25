global.prueba = ['']
global.lupinn = 0
let handler = async (m, { conn, text }) => {

global.lupinn += 1
global.prueba.push(`[${global.lupinn}] | ${text}\n`)
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
