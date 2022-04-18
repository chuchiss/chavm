let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { users, conn, command, isPrems, isOwner }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 5400) {
  let textu = pickRandom(global.lyte)
  let texti = pickRandom(global.lute)
  let results = await yts('estado para Whatsapp'+ textu + texti)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) return conn.reply(m.chat, `video o audio no encontrado`, m)
  let isVideo = /s$/.test(command)
  if (!isVideo) return m.reply('utilize .estados para descargar estados para whatsapp')
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
${title}
${isLimit ? ' ': ''} 
`.trim(), m)
  let _thumb = {}
  try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { return }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /s$/.test(command)), `
${title}
`.trim(), m, false, _thumb || {})
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
if (!isPrems && !isOwner) global.DATABASE._data.users[m.sender].limit -= 2
  } else m.reply('Cargando..')
}
handler.help = ['estados (estados random)']
handler.tags = ['downloader']
handler.command = /^estados?$/i
handler.group = true
handler.limit = true

module.exports = handler




function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.lyte = ['ñengo flow','l gante','dillom','plan b','adele','session','khea','badd bunny','rauw alejandro','daddy yankee','duki','anuel','eminem','karol g ','nicki minaj','nicki jam','maluma','dalex']

global.lute = [' comeme','acercate','podras','besame','rkt','tranquilo','suelto']


