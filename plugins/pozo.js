let handler = async (m, { conn, users }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 12000) {
function chuquii(){

conn.reply(m.chat, `perdiste` m)
}
function pruebaa(){
conn.reply(m.chat, `*Pozo acumulado \n ▫️pozo minimo ${costo} \n total de veces intentado ${veces} \n \n Cargando....`, m)
}
setTimeout(pruebaa, 1000)
setTimeout(chuquii, 12000)
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['pozo']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^pozo$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
