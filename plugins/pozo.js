let handler = async (m, { conn }) => {
function primero() {
  conn.reply(m.chat, `hola`, m)
}
function segundo() {
conn.reply(m.chat `que pinta` m)
}
setTimeout(primero, 3000)
setTimeout(segundo, 10000)
}
handler.help = ['pru']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pru)$/i
module.exports = handler
