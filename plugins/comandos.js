let handler = async (m, {conn}) => {
conn.sendFile(m.chat, 'media/comandos.jpg', 'jpg',`
⚫🄿🅁🄸🄽🄲🄸🄿🄰🄻
_.menu_
_.perfil_
_.ranking_
_.top2_
_.comandos_
_.Buy_ (comprar exp)
_.buyall_ (comprar toda la exp)
_.reclamar_
_.pagar_ @mension <cantidad de exp>
_.robar_ @mension <cantidad de exp>
_.link_
_.ping_
_.politica_
_.creditos_
*_________________________________*
🔹🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
_.attp_ Texto
_.ttp_ Texto 
_.style_ texto
_.sticker_ (seleccionando imagen)
_.imagen_ texto
_.frases_
_.memes_
_.play_ (nombre de la musica)
_.play2_ (nombre del video)
_.random_ (canción random)
_.stickerly_ 
_.estados_
_.anime_
_.google_ (busqueda de wikipedia)
_.traducir_ idioma ( marca el texto ) 
_.tts_ texto
_.s_ 
_.simi_ pregunta
_.twittear_ (quue esta pasando?)
_.twit_ (ver twits)
*_________________________________*
        ➿🄹🅄🄴🄶🄾🅂
_.mate_ medium (ganar exp)
_.adiv_ start (ganar exp)
_.tateti_
_.tutti_ 
_.luck_
_.pozo_ 
_.palabra_
_.preguntados_
*_________________________________*
      ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇ
                                        
`.trim()) 
}
catch (e) {
let handler = async (m, {conn}) => {
conn.sendFile(m.chat, 'media/comandos.jpg', 'jpg',`
⚫🄿🅁🄸🄽🄲🄸🄿🄰🄻
_.menu_
_.perfil_
_.ranking_
_.top2_
_.comandos_
_.Buy_ (comprar exp)
_.buyall_ (comprar toda la exp)
_.reclamar_
_.pagar_ @mension <cantidad de exp>
_.robar_ @mension <cantidad de exp>
_.link_
_.ping_
_.politica_
_.creditos_
*_________________________________*
🔹🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
_.attp_ Texto
_.ttp_ Texto 
_.style_ texto
_.sticker_ (seleccionando imagen)
_.imagen_ texto
_.frases_
_.memes_
_.play_ (nombre de la musica)
_.play2_ (nombre del video)
_.random_ (canción random)
_.stickerly_ 
_.estados_
_.anime_
_.google_ (busqueda de wikipedia)
_.traducir_ idioma ( marca el texto ) 
_.tts_ texto
_.s_ 
_.simi_ pregunta
_.twittear_ (quue esta pasando?)
_.twit_ (ver twits)
*_________________________________*
        ➿🄹🅄🄴🄶🄾🅂
_.mate_ medium (ganar exp)
_.adiv_ start (ganar exp)
_.tateti_
_.tutti_ 
_.luck_
_.pozo_ 
_.palabra_
_.preguntados_
*_________________________________*
      ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇ
                                        
`.trim()) 
}
  
}
handler.help = ['comandos']
handler.tags = ['info']
handler.command = /^(cmd|comandos|commandos|com|hola|list|comando|ayuda)$/i

module.exports = handler
