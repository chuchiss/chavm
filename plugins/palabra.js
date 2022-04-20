let handler = async (m, { conn, user }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastmp > 9500) {
function gero() {
let lui = 13

let Numero = Math.ceil(lui * Math.random())
 conn.reply(m.chat, `*${global.reee[Numero]}* de nuevo!`, m)
global.reeu += Numero
} 
setTimeout(gero, 5300)

  conn.reply(m.chat, `*di la palabra a continuación*\n_Empieza en 5 segundos_ ..`, m)

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

global.reee = [ 'himNo','shampoo','pergamino','sArten', 'Equilatero','trapiTO','poLIcia','Cuartel','CaTeter','TRAMPOLIN','carTeRa','kilo','gorra','refriGeraDor']

global.reeu = 0
