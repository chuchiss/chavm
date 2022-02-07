let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')

let ero = pickRandom(global.funi)
if (ero > 3) conn.sendFile(m.chat, `pickRandom(global.funis)`, 'jpg', null, m, true)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.funis = [ 'detenidou.jpg','detenido2.jpg','detenido3.jpg']

global.funi = [
  '1','2','3','4','5','6']
