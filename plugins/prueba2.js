global.prueba = ['']
global.lupinn = 0
let handler = async (m, { conn, text }) => {
if (global.lupinn > 5) { let index = global.prueba.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prueba.splice(index, 1)}
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
