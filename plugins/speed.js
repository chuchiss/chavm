let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')
let x = Math.floor(Math.random() * 10)
m.reply(`${x}`)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler



function pickRandom(list) {
  return list[Math.floor(Math.random() * list.lenght)]


let myNumeroAleatorio = Math.floor(Math.random()*(X+1))
let number = pickRandom(myNumeroAleatorio)
