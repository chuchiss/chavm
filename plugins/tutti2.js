let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, `es n cantidad`, m)
  let puntos = text
  if (isNaN(puntos)) return conn.reply(m.chat, `es d`, m)

//  if (exp < 50) return conn.reply(m.chat, `minimo 50`, m)
  let users = global.DATABASE._data.users
//  if (exp > users[m.sender].exp) return conn.reply(m.chat, `no tenes esa exp`, m)
// if (users[m.sender].limit < 1) return conn.reply(m.chat, `se requiere un limit m?nimo`, m)
  
  m.reply(`Más ${puntos} XP*`)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(puntos)$/
handler.rowner = false
handler.group = true


module.exports = handler
