let handler = async (m, { conn, user }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastmp > 12000) {
function mmero() {
  let costo = 5000
  let veces = global.pozo
  if(typeof global.pozo == 'undefined') {
  global.pozo = 0
  }
  let lukia = (costo * veces)
  conn.reply(m.chat, `*Pozo acumulado check*🤞🤞\n \n📍costo del pozo ${costo} xp\n📍valor del pozo ${lukia} xp \n📍total de intentos ${veces} \n \n *Cargando...*`, m)
}
setTimeout(mmero, 3000)
function ttero() {
 let costo = 5000
  let veces = global.pozo
  let lukia = (costo * veces)
 let ero = pickRandom(global.funi)
 function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let cilu = global.DATABASE._data.users[m.sender]
if (cilu.exp < costo) return conn.reply(m.chat, `*Lo* *siento* , _No tienes suficiente Exp!!_ `, m)
if (ero > 5) { conn.reply(m.chat, `🤑FELICIDADES!! \nHaz ganado el pozo de ${lukia} xp!!!`, m)
cilu.exp += lukia
global.pozo -= veces
return
}
 global.pozo += 1
 cilu.exp -= costo
 conn.reply(m.chat, `*∆perdiste* , Intentalo de nuevo!`, m)
}
setTimeout(ttero, 8500)
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['pozo']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pozo)$/i
module.exports = handler
