let handler = m => m
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = function (m, { user }) {
let veces = global.lll
let cec = global.reeu
//if (m.text !== global.logi[veces]) {
//if ((!/^pregunta/i.test(m.quoted.text)))
//m.reply(`eme`)
//return
//}
if (m.text === global.reee[cec]) { 
global.DATABASE._data.users[m.sender].exp += 10
global.reeu -= global.reeu
global.ruizdi -= global.ruizdi
global.luchi -= global.luchi
 conn.reply(m.chat, `*Palabra* - Ganaste +10 exp`, m)
return
}


if (m.text === global.logi[veces]) { 

global.lll -= global.lll
global.DATABASE._data.users[m.sender].exp += 200
global.DATABASE._data.users[m.sender].preg += 1
 conn.reply(m.chat, `*Preguntados* - Ganaste +200 exp`, m) 
return } 
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isLink = linkRegex.exec(m.text)

  if (chat.antiLink && isLink) {
    m.reply('Eliminando!!')
conn.groupRemove(m.chat, [m.sender])
    if (global.opts['restrict']) {
       if (!user.isAdmin) return true
       conn.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
