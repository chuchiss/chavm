let handler = async (m, { conn }) => {
function mmero() {
  let costo = 5000
  conn.reply(m.chat, `pozo acumulado costo ${costo}`, m)
}
setTimeout(mmero, 3000)
function ttero() {
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
