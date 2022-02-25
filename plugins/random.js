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


global.lyte = ['Adele','EasyOnM
','RosalíayTheWeeknd','LaFama
','AitanayNickiNicole','Formentera
','Camilo','Pesadilla
','PabloAlborán','SoyCapaz
','SebastiánYatrayGuaynaa','ChicaIdeal
','NathyPeluso','VivirAsíEsMorirdeAmor
','Years&YearsyGalantis','SweetTalker
','AitanayNickiNicole-Formentera
','RauwAlejandro','Desesperados
','Ptazeta','Caelanocheft
','RigobertaBandini','AyMama
','Leiva','NataliaLafourcade','Diazepam
','NathyPeluso','VivirAsíEsMorirdeAmor
','Zzoilo','Starsky&Hutch
','Tini','Aquíestoy','
','cTangana-Ingobernable','
','RauwAlejandro-Tododeti
','SilkSonic-LeavetheDoorOpen
','Zahara-Merichane
','RigobertaBandini-Perra
','Tyler','TheCreator-Lumberjack
','SnailMail-Valentine
','Low-DaysLikeThese-
','Tusa','KAROLG','NickiMinaj','
','Hawái','Maluma','
','Hola','Remix','Dalex','LennyTavárez','ChenchoCorleone','Juhn','
','LaJeepeta','RemixNioGarcia','AnuelAA','MykeTowers','Brray','Juanka','
','DanceMonkeyTonesAndI','
','LaCuriosidadJayWheeler','DJNelson','MykeTowers','
','SiguesConElArcangel','Sech','DímeloFlow','
','BillieEilish','
','TaylorSwift','
','ArianaGrande','
','DuaLipa','
','Halsey','
','baddbunny
','ñengoflow
','daddyyankee
BillieEilishftJustinBieber','BadGuy','
RosalíaftJBalvin','Conaltura','
NeoPistéa','Tumbandoelclub(remix)','
LanaDelRey','TheGreatest','
Wos','Canguro','
TaylorSwift','Lover','
DaddyYankee','ConCalma','
LilNasX','OldTownRoad'] 


