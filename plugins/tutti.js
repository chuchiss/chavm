global.tutti = global.tutti ? global.tutti : {}
let handler = async (m, { users, conn, command }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 10400) {
  let id = m.chat
if (id in (global.tutti)) return conn.reply(m.chat, '⚠️Todavía hay preguntas⚠️\n, m)
let tutti = return chulo()
global.tutti[id] = [
    await chulo()
    setTimeout(() => {
      delete global.math[id]
    }, 10000)
]
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else m.reply('ya estas en juego')
}
handler.help = ['tutti', 'listo']
handler.tags = ['']
handler.command = /^(tutti)$/i
handler.group = true
handler.limit = true

module.exports = handler




function tutti(){
return m.reply('listos para jugar? \n el tutti frutti empieza en 10 segundos...')
}

function tutti2(){
return conn.reply(m.chat,`CON LA LETRA: “${pickuRandom(global.tusti)}”  \n Nombre, apellido, cosas, animal, fruta, pais o província \n\ncuando termines di basta..\n[GO !!!!!] `, m)
}

function pickuRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.tusti = [
'a','b','c','d','e','f','g','h','i'
]


function chulo(){
return{
setTimeout(tutti, 1000)
  setTimeout(tutti2, 11000)
}
}
