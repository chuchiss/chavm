let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.lurl)}”`, m)
}
handler.command = /^(prueba2)$/i
handler.help = ['']
handler.tags = ['']
handler.owner = false
handler.mods = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/


global.lurl= [' disk']
global.chkn = [ '╭╭─「⚫🄿🅁🄸🄽🄲🄸🄿🄰🄻」
//│ Tienes *${limit} Limit* *${exp} XP* 
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
//${readmore}
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
//${readmore}
╭─「➿🄹🅄🄴🄶🄾🅂
│.mate medium (ganar exp)
│.adiv start (ganar exp)
│.tateti
│.tutti
│.luck
│.pozo
│.palabra
│.preguntados
╰────'
]
