let handler = async (m, { conn }) => {
function mmero() {
  let costo = 5000
  let veces = global.DATABASE.data.chats[m.chat].pozo
  let lukia = (costo * veces)
  conn.reply(m.chat, `pozo acumulado total del pozo ${lukia}  total de veces ${veces}`, m)
}
setTimeout(mmero, 3000)
function ttero() {
 let costo = 5000
  let veces = global.DATABASE.data.chats[m.chat].pozo
  let lukia = (costo * veces)
 let ero = pickRandom(global.funi)
 function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
 global.DATABASE.data.chats[m.chat].pozo += 1
  if (ero > 5) { conn.reply(m.chat, `ganaste`, m)
 global.DATABASE.data.chats[m.chat].pozo -= veces
return
}
 conn.reply(m.chat, `perdiste, Intentalo de nuevo!`, m)
}
setTimeout(ttero, 3500)

}
handler.help = ['pru']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pru)$/i
module.exports = handler
