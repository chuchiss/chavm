let handler = async (m, { conn, user }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastmp > 9500) {
function gero() {

 conn.reply(m.chat, `*${global.bucin[Numero]}* de nuevo!`, m)
} 
setTimeout(gero, 9500)

  conn.reply(m.chat, `*∆ di la palabra`, m)

global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['palabra']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pal(abra)?)$/i
module.exports = handler
handler.owner = true

global.reee = [ 'caca' ]
