let handler = async (m, { conn, user }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastmp > 9500) {
function gero() {
let lui = 3
global.reeu += Numero
let Numero = Math.ceil(lui * Math.random())
 conn.reply(m.chat, `*${global.reee[Numero]}* de nuevo!`, m)
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

global.reee = [ 'caca','shampoo','pergamino' ]

global.reeu = 0
