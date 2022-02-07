let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.04
let handler = async (m, { conn, text }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastrob > 3600000) {
  if (!text) return conn.reply(m.chat, `ingrese la cantidad de exp que vas a robar`, m)
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `etiquete a uno`, m)
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  let xp = parseInt(txt)
  if (isNaN(xp)) return conn.reply(m.chat, `es .robar @mension cantidad`, m)
  let exp = xp
  if (exp < 40) return conn.reply(m.chat, `minimo 40`, m)
  let users = global.DATABASE._data.users
let result = global.DATABASE.data.users[who].exp
  if (exp > users[who].exp) return conn.reply(m.chat, `no tiene esa exp`, m)
  if (exp > 1050) return conn.reply(m.chat, `solo puedes robar hasta mil`, m)
let ero = pickRandom(global.funi)
if (ero > 3) { return m.reply ('ha sido detenido por la policía')
conn.sendFile(m.chat, 'media/detenidou.jpg', 'jpg', null, m, true)
 global.DATABASE._data.users[m.sender].lastrob = new Date * 1
}
 users[m.sender].exp += exp
  users[m.sender].robos += 1
  users[who].exp -= xp
  await m.reply('_*Robando....*_') 
conn.sendFile(m.chat, 'media/roba2.jpg', 'jpg', null, m, true)
  await
  await
  await
  await
  await
  await
  await
  await
  await
  conn.fakeReply(m.chat, `te robaron *${xp} XP* \n _te quedan_ ${result} *xp*`, who, m.text)
  } else m.reply(' DETENIDO 🌟\npuedes volver a robar cada 1 horas:)')
}
handler.help = ['robar @user <cantidad>']
handler.tags = ['xp']
handler.command = /^robar$/
handler.rowner = false

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.funi = [
  '1','2','3','4','5','6']
