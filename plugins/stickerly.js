let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')
let handler  = async (m, { conn, args }) => {
  let text = `${pickkRandom(global.bucinaa)}`
  let results = await gis('sticker ' + ' webp ' + text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('sticker no encontrado')
  let churro = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2)
  if ((churro) !== 'webp') {
let results = await gis('sticker ' + ' webp ' + text) || []
let { url, width, height } = pickRandom(results) || {}
  conn.sendFile(m.chat, url, 'gimage', `
sticker random
`.trim(), m)
return}
  // return
//   let linkRegex = //([0-9A-Za-z]{20,24})\/webp/i
 // let isLink = linkRegex.exec(url)
//if (!isLink) m.reply(`hola`)

  conn.sendFile(m.chat, url, 'gimage', `
sticker random
`.trim(), m)

}
handler.help = ['stickerly (sticker random)']
handler.tags = ['internet', 'tools']


handler.command = /^(stic?kerly)$/i
handler.private = false
handler.exp = 750
handler.owner = false


module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function pickkRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucinaa = ['messi','Hasbullah Magomedov','gavin','Mohamed Nantoume','Jinmiran Baby','sponge bob','pocoyo','tom and jerry'
]

global.bucinaas = [
  'bob esponja','curioso','enojado','terror','perro','gato','bebe','autos','risas','triste','contento','chistoso'

]

