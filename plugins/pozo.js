let handler = async (m, { conn }) => {
  conn.reply(m.chat, `hola`, m)
}
handler.help = ['pru']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pru)$/i
module.exports = handler
