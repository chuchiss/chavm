let timeout = 60000
let poin = 500
let poin_lose = -100
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya'
  if (!m.mentionedJid[0]) return m.reply(`¿A quién te gustaría retar?_\nEtiqueta a la persona.. Ejemplo\n\n${usedPrefix}suit @alfredo`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
_*SUIT PvP*_
@${m.sender.split`@`[0]} vs  @${m.mentionedJid[0].split`@`[0]} \n A jugar suit!
Esperando que @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `Escribe "aceptar/ok/gas" para iniciar la demanda\nEscribe "rechazar/no puedo/más tarde" para rechazar`
  conn.suit[id] = {
    chat: await conn.reply(m.chat, `${caption} ${footer}`, m),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_Se terminó el tiempo_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit2'].map(v => v + ' @tag')
handler.command = /^suit(pvp|2)$/i
handler.limit = false
handler.group = true

module.exports = handler
