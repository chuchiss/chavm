let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')
let handler  = async (m, { conn, args }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 2400) {
  let text = `${pickkRandom(global.bucina)}`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return conn.reply(m.chat, `imagen no encontrado`, m)
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
  'meme graciosos jpg',
  'meme espanol 2019 jpg',
  'meme graciosos de autos',
  'meme espanol jpg',
  'meme graciosos 2020'
]
