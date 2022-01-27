let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')
function RImage(){
let handler  = async (m, { conn, args }) => {
  let text = `“${pickkRandom(global.bucina)}”`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return conn.reply(m.chat, `imagen no encontrado`, m)
  conn.sendFile(m.chat, url, 'gimage', `
MEME `.trim(), m)
catch (e){ return RImage() }
}
}
handler.help = ['meme', 'memes']
handler.tags = ['internet', 'tools']
handler.command = /^(meme|memes)$/i
handler.group = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function pickkRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucina = [
  'meme gatitos',
  'meme perros',
  'memes del dia',
  'memes',
  'memes 2022',
  'memes graciosos',
  'meme gracioso',
  'memes paises',
  'memes de risa',
  'memes español',
  'memes de instagram',
  'meme de instagram',
  'memes de facebook',
  'meme de facebook',
]
