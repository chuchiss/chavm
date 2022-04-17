let handler = async (m, { conn, user }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastmp > 9500) {
function mmero() {
  let costo = 500
  let veces = global.pozo
  if(typeof global.pozo == 'undefined') {
  global.pozo = 0
  }
  let lukia = (costo * veces)
  conn.reply(m.chat, `*∆ Pozo acumulado ∆*\n \n📍costo del pozo ${costo} xp\n📍valor del pozo ${lukia} xp \n📍total de intentos ${veces} \n \n *Cargando...*`, m)
}
setTimeout(mmero, 3000)
function ttero() {

 conn.reply(m.chat, `*∆perdiste* ${elo} , Intentalo de nuevo!`, m)
} 
setTimeout(ttero, 9500)
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['pozo']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pozo)$/i
module.exports = handler
