let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = function (m, { user }) {
let veces = global.lll

if (m.text === global.logi[veces]) { 
global.DATABASE._data.users[m.sender].exp += 400
 conn.reply(m.chat, `*Preguntados* - Ganaste +400 exp`, m) 
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
