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
 global.DATABASE.data.chats[m.chat].pozo -= veces
  
 conn.reply(m.chat, `ll`, m)
}
setTimeout(ttero, 3500)

}
handler.help = ['pru']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pru)$/i
module.exports = handler
