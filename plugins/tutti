let handler = async (m, { users, conn, command }) => {
if (new Date - global.DATABASE._data.chats[m.chat].ttutti > 10400) {

function tutti(){
return m.reply('listos para jugar? \n el tutti frutti empieza en 10 segundos...')
}

function tutti2(){
return conn.reply(m.chat,`CON LA LETRA: “${pickuRandom(global.tusti)}”  \n Nombre, apellido, cosas, animal, fruta, pais o província \n\ncuando termines di basta..\n[GO !!!!!] `, m)
}

setTimeout(tutti, 1000)
setTimeout(tutti2, 11000)
global.DATABASE._data.chats[m.chat].ttutti = new Date * 1
  } else m.reply('intenta luego')
}
handler.help = ['tutti', 'listo']
handler.tags = ['']
handler.command = /^(tutti)$/i
handler.group = true
handler.limit = true

module.exports = handler






function pickuRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.tusti = [
'a','b','c','d','e','f','g','h','i'
]




