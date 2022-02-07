let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')


m.reply('${pickRandom(global.culo)}')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.culo=[
1,2,3,3,2,1]
