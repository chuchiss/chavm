global.tutti = global.tutti ? global.tutti : {}
let handler = async (m, {conn}) => {
let id = m.chat
if (id in global.tutti) return conn.reply(m.chat, 'sjdjdjkd', global.tutti[id][0])

m.reply('you are ready for the tutti frutti? \n Minimo 2 jugadores')
function awaiting(){
 m.reply('Esperando compañero..')
}
function awaitingg(){
m.reply('el que termina primero dice basta \n\nPreparado ...\n\n Listo???') }
function tutti(){
conn.reply(m.chat,` empieza la letra “${pickRandom(global.chicle)}”`, m)
m.reply(' nombre , apellido , cosa , animal , pais ')
} function final(){
delete global.tutti[id]
}
global.tutti[id] = [
    await setTimeout(awaiting, 4000)
setTimeout(awaitingg, 8000)
setTimeout(tutti, 12000)
setTimeout(final, 20000)
  ]
}

handler.help = ['tutti']
handler.tags = ['']
handler.command = /^(tutti)$/i

module.exports = handler

global.chicle = [
'a','b','c','d','e','f','g','h','i','o','u'
]
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
