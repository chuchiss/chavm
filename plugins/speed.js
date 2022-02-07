let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')

m.reply(`x`)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler



function pickRandom(list) {
  return list[Math.floor(Math.random() * list.lenght)]
var x = Math.floor(Math.random() * 10)

let myNumeroAleatorio = Math.floor(Math.random()*(X+1))
let number = pickRandom(myNumeroAleatorio)
