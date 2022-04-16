let handler = async (m, { conn }) => {

setTimeout(mmero, 3000)
setTimeout(segus, 10000)


function mmero() {
  conn.reply(m.chat, `hola`, m)
}
function segus() {
conn.reply(m.chat `que pinta` m)
}

}
handler.help = ['pru']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pru)$/i
module.exports = handler
