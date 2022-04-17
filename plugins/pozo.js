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
 let costo = 500
  let veces = global.pozo
  let lukia = (costo * veces)
let pajak = Math.random()
let xp = (cilu.limit * 10)
let elo = Math.ceil(xp * pajak)
let cilu = global.DATABASE._data.users[m.sender]
if (cilu.limit < 2) return conn.reply(m.chat, `*Lo* *siento* , _Minimo 1 limit!!_ `, m)
if (cilu.exp < costo) return conn.reply(m.chat, `*Lo* *siento* , _No tienes suficiente Exp!!_ `, m)
if (elo == 4) { conn.reply(m.chat, `🤑*∆FELICIDADES!! \nHaz ganado el pozo de ${lukia} xp!!!`, m)
cilu.exp += lukia
global.pozo -= veces
return
}
 global.pozo += 1
 cilu.exp -= costo
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
