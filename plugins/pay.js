let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, `es .pagar @mension cantidad`, m)
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `etiquete uno`, m)
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  let xp = parseInt(txt)
  if (isNaN(xp)) return conn.reply(m.chat, `es .pagar @mension cantidad`, m)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
 let result = global.DATABASE.data.users[m.sender].exp
  if (exp < 50) return conn.reply(m.chat, `minimo 50`, m)
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) return conn.reply(m.chat, `no tenes esa exp`, m)
 if (users[m.sender].limit < 1) return conn.reply(m.chat, `se requiere un limit m?nimo`, m)
  users[m.sender].exp -= exp
  users[who].exp += xp
  users[m.sender].limit -= 1
  
  m.reply(`Mas impuestos gastaste  *${-exp} XP* tienes en total ${result} *xp*`)
  conn.fakeReply(m.chat, `te enviaron *+${xp} XP*`, who, m.text)
}
handler.help = ['pagar @user <amount>']
handler.tags = ['xp']
handler.command = /^(pagar|dar|regalar)$/
handler.rowner = false
handler.group = true


module.exports = handler
