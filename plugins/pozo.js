let handler = async (m, { conn }) => {
function mmero() {
  let costo = 5000
  let veces = global.DATABASE.data.chats[m.chat].pozo
  conn.reply(m.chat, `pozo acumulado costo ${costo}  total de veces ${veces}`, m)
}
setTimeout(mmero, 3000)
function ttero() {
 global.DATABASE.data.chats[m.chat].pozo += 1
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
