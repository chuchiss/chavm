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
if (new Date - global.DATABASE._data.users[m.sender].lastme > 60400) {
if (global.lupinn > 5) {global.prueba.splice(1, 1)
global.lupinn -= 1
}
global.lupinn += 1
global.chuch += 1
global.DATABASE._data.users[m.sender].pregu += global.chuch
global.prueba.push(`[${global.chuch}] | ${text}\n`)
conn.reply(m.chat, `*TWitteado ahora*

${global.prueba}
`, m)
setTimeout(()=> {
if (global.chuch > global.DATABASE._data.users[m.sender].pregu)
global.DATABASE._data.users[m.sender].pregu -= global.DATABASE._data.users[m.sender].pregu
m.reply(`Publicaron un nuevo Twit`)
return
}, 9000)
//global.DATABASE._data.users[m.sender].lastme = new Date * 1
} else return m.reply(` espera 1 minuto para twitear.. `)
} else return
}

handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(tw|twit|(twit|twi)tear)$/i
handler.limit = true
handler.group = true
handler.admin = false
module.exports = handler
