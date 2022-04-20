let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')
let handler  = async (m, { conn, args }) => {
 try{
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 2400) {
  let text = `“${pickkRandom(global.bucina)}”`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return conn.reply(m.chat, `imagen no encontrado`, m)
  if (!gis)  console.error(e)
let churro = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2)
  if ((churro) !== 'jpg') {
let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
conn.sendFile(m.chat, url, 'gimage', `
MEME
`.trim(), m)
return}
  conn.sendFile(m.chat, url, 'gimage', `
MEME
`.trim(), m)
 global.DATABASE._data.users[m.sender].lastmp = new Date * 1
 } else return
} catch(e){
let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
conn.sendFile(m.chat, url, 'gimage', `
MEME
`.trim(), m)
} finally{
let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
conn.sendFile(m.chat, url, 'gimage', `
MEME
`.trim(), m)
return
}
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
  'los mejores memes jpg'
  
]
