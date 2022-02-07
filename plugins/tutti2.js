let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, `es n cantidad`, m)
  let puntos = text
  if (isNaN(puntos)) return conn.reply(m.chat, `es d`, m)

//  if (exp < 50) return conn.reply(m.chat, `minimo 50`, m)
  let users = global.DATABASE._data.users
 let chats = global.DATABASE._data.chats
//if (chats[m.chat].jog < 1){ return conn.reply(m.chat, `no estss ennjuego`, m)
//users[m.sender].point -= puntos}
if (users[m.sender].point > 100) { conn.reply(m.chat, `finalizado Ganaste +500 exp`, m)
users[m.sender].exp += 500
users[m.sender].point -= puntos 
chats[m.chat].jog = 0
users[m.sender].mismo = 0
return 0!
}
  users[m.sender].point += puntos

  m.reply(`Tenes ${puntos} en el tutti frutti`)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(puntos)$/
handler.rowner = false
handler.group = true


module.exports = handler
