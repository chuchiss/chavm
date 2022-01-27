let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')
let handler  = async (m, { conn, args }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 2400) {
  let text = `“${pickkRandom(global.bucina)}”`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return conn.reply(m.chat, `imagen no encontrado`, m)
  if (!gis)  console.error(e)
  conn.sendFile(m.chat, url, 'gimage', `
MEME
`.trim(), m)
 global.DATABASE._data.users[m.sender].lastmp = new Date * 1
 } else return
}
handler.help = ['meme', 'memes']
handler.tags = ['internet', 'tools']
handler.command = /^(me(me)|memes)$/i
handler.group = true
handler.exp = 750

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
