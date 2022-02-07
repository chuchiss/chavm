let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  m.reply(neww - old + 'ms')
conn.sendFile(m.chat, 'media/detenidou.jpg', 'jpg', null, m, true)
catch(e) {require('./lib/image.js')}
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler


