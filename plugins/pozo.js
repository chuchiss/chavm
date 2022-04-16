let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 12000) {
function chuqui(){
if (global.DATABASE._data.users[m.sender].limit < 10) return m.reply('No tienes mas limites para comprar pon .buy')
let costo = 5000
let veces = global.DATABASE.data.chat[m.all].pozo
let ero = pickRandom(global.funi)
let total = (veces * 10000 / 2)
conn.reply(m.chat, `perdiste` m)
}
function prueba(){
conn.reply(m.chat, `*Pozo acumulado \n ▫️pozo minimo ${costo} \n total de veces intentado ${veces} \n \n Cargando....`, m)
}
setTimeout(prueba, 1000)
setTimeout(chuqui, 12000)
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['pozo']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pozo)$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
