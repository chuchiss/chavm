const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let readmore = readMore
global.chuki = 0
let handler  = async (m, { conn }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
let { name, limit, exp, lastclaim, preg, registered, warning, robos, like, banned, regTime, age, level } = global.DATABASE.data.users[m.sender]
if (global.chuki > 8) { global.chuki -= global.chuki}
if (global.chuki > 1 && global.chuki < 2) {
conn.reply(m.chat, `╭─「🔹🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
│ Tienes *${limit} Limit* *${exp} XP*
│.attp Texto
│.ttp Texto 
│.style texto
│.sticker (seleccionando imagen)
│.imagen texto
│.frases
│.memes
│.chatear (anonymous)
│.play (nombre de la musica)
│.play2 (nombre del video)
│.random (canción random)
│.stickerly
│.estados
│.anime
│.google (busqueda de wikipedia)
│.traducir idioma ( marca el texto ) 
│.tts texto
│.s
│.simi pregunta
│.twittear (quue esta pasando?)
│.twit ver twits)
╰────
${readmore}
╭╭─「⚫🄿🅁🄸🄽🄲🄸🄿🄰🄻」 
│.menu
│.perfil
│.ranking
│.top2
│.comandos
│.buy (comprar exp)
│.buyall (comprar toda la exp)
│.reclamar
│.pagar @mension <cantidad de │exp>
│.robar @mension <cantidad de │exp>
│.link
│.ping
│.politica
│.creditos
╰────
${readmore}
╭─「➿🄹🅄🄴🄶🄾🅂
│.mate medium (ganar exp)
│.adiv start (ganar exp)
│.tateti
│.tutti
│.luck
│.pozo
│.palabra
│.preguntados
╰────



`, m)
global.DATABASE._data.users[m.sender].lastme = new Date * 1
global.chuki += 1
return }
if (global.chuki > 2) {
conn.reply(m.chat, `╭─「➿🄹🅄🄴🄶🄾🅂
│Tienes *${limit} Limit* *${exp} XP* 
│.mate medium (ganar exp)
│.adiv start (ganar exp)
│.tateti
│.tutti
│.luck
│.pozo
│.palabra
│.preguntados
╰────
${readmore}
╭╭─「⚫🄿🅁🄸🄽🄲🄸🄿🄰🄻」
│.menu
│.perfil
│.ranking
│.top2
│.comandos
│.buy (comprar exp)
│.buyall (comprar toda la exp)
│.reclamar
│.pagar @mension <cantidad de │exp>
│.robar @mension <cantidad de │exp>
│.link
│.ping
│.politica
│.creditos
╰────
${readmore}
╭─「🔹🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
│.attp Texto
│.ttp Texto 
│.style texto
│.sticker (seleccionando imagen)
│.imagen texto
│.frases
│.memes
│.chatear (anonymous)
│.play (nombre de la musica)
│.play2 (nombre del video)
│.random (canción random)
│.stickerly
│.estados
│.anime
│.google (busqueda de wikipedia)
│.traducir idioma ( marca el texto ) 
│.tts texto
│.s
│.simi pregunta
│.twittear (quue esta pasando?)
│.twit ver twits)
╰────


`, m)
global.DATABASE._data.users[m.sender].lastme = new Date * 1
global.chuki += 1
return }
conn.reply(m.chat, `╭╭─「⚫🄿🅁🄸🄽🄲🄸🄿🄰🄻」
│ Tienes *${limit} Limit* *${exp} XP* 
│.menu
│.perfil
│.ranking
│.top2
│.comandos
│.buy (comprar exp)
│.buyall (comprar toda la exp)
│.reclamar
│.pagar @mension <cantidad de │exp>
│.robar @mension <cantidad de │exp>
│.link
│.ping
│.politica
│.creditos
╰────
${readmore}
╭─「🔹🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
│.attp Texto
│.ttp Texto 
│.style texto
│.sticker (seleccionando imagen)
│.imagen texto
│.frases
│.memes
│.chatear (anonymous)
│.play (nombre de la musica)
│.play2 (nombre del video)
│.random (canción random)
│.stickerly
│.estados
│.anime
│.google (busqueda de wikipedia)
│.traducir idioma ( marca el texto ) 
│.tts texto
│.s
│.simi pregunta
│.twittear (quue esta pasando?)
│.twit (ver twits)
╰────
${readmore}
╭─「➿🄹🅄🄴🄶🄾🅂
│.mate medium (ganar exp)
│.adiv start (ganar exp)
│.tateti
│.tutti
│.luck
│.pozo
│.palabra
│.preguntados
╰────
`, m)

global.chuki += 1
global.DATABASE._data.users[m.sender].lastme = new Date * 1
}else return
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(prueba2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

