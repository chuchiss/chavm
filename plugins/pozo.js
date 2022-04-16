let handler = async (m, { conn }) => {
function mmero() {
  conn.reply(m.chat, `hola`, m)
}
setTimeout(mmero, 3000)



}
handler.help = ['pru']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pru)$/i
module.exports = handler
