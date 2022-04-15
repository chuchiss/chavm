let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')
let handler  = async (m, { conn, args }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 2400) {
  let text = `${pickkRandom(global.bucinaa)}`
  let results = await gis('sticker' + 'webp' + text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('sticker no encontrado')
  conn.sendFile(m.chat, url, 'gimage', `
sticker random
`.trim(), m)
 global.DATABASE._data.users[m.sender].lastmp = new Date * 1
 } else return
}
handler.help = ['stickerly (sticker random)']
handler.tags = ['internet', 'tools']


handler.command = /^(stic?kerly)$/i
handler.private = false
handler.exp = 750


module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function pickkRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucinaa = [ 'sponge bob','pocoyo','tom and jerry','shreck','los simpsons','bart simpsons','spiderman','iron man','hulk'
]

global.bucinaas = [
  'bob esponja','curioso','enojado','terror','perro','gato','bebe','autos','risas','triste','contento','chistoso'

]

