let handler = async (m, { conn }) => {
function mmero() {
  let costo = 5000
  let veces = global.pozo
  if(typeof global.pozo == 'undefined') {
  global.pozo = 0
  }
  let lukia = (costo * veces)
  conn.reply(m.chat, `pozo acumulado \ntotal del pozo ${lukia}  \ntotal de intentos ${veces}`, m)
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
 global.pozo += 1
 global.DATABASE.data.users[user].exp -= costo
 if (global.DATABASE.data.users[user].exp < costo) return conn.reply(m.chat, `Lo siento! no tienes exp`, m)
  if (ero > 5) { conn.reply(m.chat, `FELICIDADES!! \nHaz ganado el pozo de ${lukia} xp!!!`, m)
 global.pozo -= veces
return
}
 conn.reply(m.chat, `*∆perdiste* , Intentalo de nuevo!`, m)
}
setTimeout(ttero, 8500)

}
handler.help = ['pru']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pru)$/i
module.exports = handler
