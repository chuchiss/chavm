global.prueba = ['']
global.lupinn = 0
global.chuch = 0
let handler = async (m, { conn, text }) => {
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let isLink = linkRegex.exec(m.text)
if (!isLink) {
if (global.lupinn > 5) {global.prueba.splice(1, 1)
global.lupinn -= 1
}
global.lupinn += 1
global.chuch += 1
global.prueba.push(`[${global.chuch}] | ${text}\n`)
conn.reply(m.chat, `
*TWitteado ahora*

${global.prueba}`, m)
} else return
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(prueba2)$/i
handler.exp = 5
handler.admin = false
handler.premium = false
handler.group = false

module.exports = handler
