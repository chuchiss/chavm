let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')

function randomInt(, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(12)
  to = Math.floor(50)
  return Math.floor((to - from) * Math.random() + from)

m.reply(`Math.floor(50)`)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler


let myNumeroAleatorio = Math.floor(Math.random()*(X+1))
let number = pickRandom(myNumeroAleatorio)
