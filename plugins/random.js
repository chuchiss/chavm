let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { users, conn, command, isPrems, isOwner }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 10400) {
  let textu = pickRandom(global.lyte)
  let results = await yts(textu)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) return conn.reply(m.chat, `video o audio no encontrado`, m)
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*🔥Titulo:* ${title}
*📂Peso:* ${filesizeF}
${isLimit ? ' ': ''} 
`.trim(), m)
  let _thumb = {}
  try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { return }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*🔥Title:* ${title}
*📂Filesize:* ${filesizeF}
`.trim(), m, false, _thumb || {})
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
if (!isPrems && !isOwner) global.DATABASE._data.users[m.sender].limit -= 2
  } else m.reply('Cargando..')
}
handler.help = ['play', 'play2'].map(v => v + ' <canción >')
handler.tags = ['downloader']
handler.command = /^random2?$/i
handler.group = true
handler.limit = true

module.exports = handler




function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.lyte = ['La rica boca - DJ Bulbo',' Esto Tilin - Novelpoppys',' Con el pompi pa arriba - Mala fe',' 23 - Randy ft',' Ape Drums
',' Sessions 5 - Kaleb di masi ft',' DJ Tao',' Menea tu chapa - Wilo D New

7',' Love nwantiti - CKay- DJ YO- AX’EL',' Linda - Rosalía ft',' Tokischa

9',' Pepas - Farruko

10',' Miénteme - Tini ft',' Maria Becerra

11',' Arremangala arrempújala - Los Karkik’s

12',' París - Ingratax

13',' Índigo - Camilo ft',' Evaluna Montaner

14',' AM Remix - Nio Garcia- J Balvin y Bad Bunny

15',' Una nota - J Balvin ft',' Sech

16',' La mamá de la mamá - El Alfa- Chael Produciendo- CJ- El Cherry Scom

17',' Fiel remix - Wisin- Jhay Cortez- Anuel AA- Los legendarios y Mike Towers

18',' Pareja del año - Sebastián Yatra y Myke Towers

19',' Un latigazo remix - Locura mix

20',' Todo de ti - Rauw Alejandro

21',' Chivirika - El Villanord y Yailin la más viral

22',' Yonaguni - Bad bunny',' Sal y perrea - Sech',' Trakatá - Ptzeta- Farina y Juacko',' Ar rico rico - Dj pirata']


