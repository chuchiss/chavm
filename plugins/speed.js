let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')
m.reply(`${number}`)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler


let myNumeroAleatorio = Math.floor(Math.random()*(200+1))
let number = pickRandom(myNumeroAleatorio)
