global.prueba = ['']
global.lupinn = 0
global.chuch = 0
let handler = async (m, { conn, text }) => {
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let isLink = linkRegex.exec(m.text)
if (!isLink) {
if (!text) { return m.reply(` *TWitteado ahora*

${global.prueba} `)

}
if (global.lupinn > 5) {global.prueba.splice(1, 1)
global.lupinn -= 1
}
global.lupinn += 1
global.chuch += 1
global.prueba.push(`[${global.chuch}] | ${text}\n`)
conn.reply(m.chat, `
*TWitteado ahora*

${global.prueba}
`, m)
} else return
}

handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(tw|twit|(twit|twi)tear)$/i
handler.limit = true
handler.group = true
handler.admin = false
module.exports = handler
