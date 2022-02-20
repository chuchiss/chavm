let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 5400) {
m.reply(`
    📍🄻🄾🅂 🄲🄾🄼🄰🄽🄳🄾🅂 🅂🄾🄽 
_.menu_
_.perfil_
_.ranking_
_.likes_
_.comandos_
_.Buy_ (comprar limits)
_.buyall_ (comprar toda la exp a limit)
_.reclamar_
_.pagar_ @mension <cantidad de exp>
_.robar_ @mension <cantidad de exp>
_.robos_
_.ping_
_.politica_
_.creditos_
*___________________________________*
      📌🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
_.attp_ Texto
_.ttp_ Texto 
_.style_ Texto
_.sticker_ (Crea tu sticker)
_.imagen_ (busqueda de imagen)
_.frases_ 
_.memes_
_.play_ (Descarga mmusic mp3)
_.play2_ (Descarga videos)
_.anime_
_.google_ (busqueda de wikipedia)
_.traducir_ idioma ( marca el texto ) 
_.tts_ Texto 
_.simi_ (habla con insane)
*___________________________________*
        ➿🄹🅄🄴🄶🄾🅂
_.mate_ medium (ganar exp)
_.adiv_ start (ganar exp)
_.tateti_ (ganar exp)
_.tutti_  
_.luck_ (ganar exp)
_proximo a salir preguntados..._
*___________________________________*
       ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇ
                                        
`.trim()) 
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['comandos']
handler.tags = ['info']
handler.command = /^(cmd|comandos|commandos|com|hola|list|comando|ayuda)$/i

module.exports = handler
