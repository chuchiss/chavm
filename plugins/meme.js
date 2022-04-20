let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')

let handler  = async (m, { conn, args }) => {
  let text = `“${pickkRandom(global.bucina)}”`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return conn.reply(m.chat, `imagen no encontrado`, m)
  if (e) return 0!
let churro = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2)

  conn.sendFile(m.chat, url, 'gimage', `
MEME
`.trim(), m)

}
handler.help = ['meme', 'memes']
handler.tags = ['internet', 'tools']
handler.command = /^(me(me)|memes)$/i
handler.group = true
handler.exp = 750
handler.owner= false
module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function pickkRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucina = [
  'meme espanol 2019 jpg',
  'meme graciosos de autos',
  'meme espanol jpg',
  'meme graciosos 2020',
  'meme espanol 2018',
  'meme gracioso de bicis',
  'meme espanol 2021',
  'meme graciosos de perros',
  'meme espanol de gatos',
  'meme graciosos arbol',
  'meme enfermos gatos',
  'meme graciosos',
  'meme ultimo meme del dia',
  'meme sobrenatural 2019',
  'meme graciosos de autos',
  'meme espanol ciudades',
  'meme graciosos 2020',
  'meme lindo 2021',
  'meme de peliculas',
  'meme boludos',
  'meme gracioso de bicis',
  'meme espanol 2021',
  'meme graciosos de perros',
  'meme instagram',
  'meme osos arbol',
  'meme argetina',
  'meme colombia',
  'meme brasil',
  'meme afeminado',
  'meme chile',
  'meme venezuela',
  'meme hd 4k'
  
]
