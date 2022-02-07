let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')
function getRandom() {
  return Math.random();
}
m.reply(getRandom())
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
