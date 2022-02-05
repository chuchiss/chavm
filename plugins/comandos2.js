let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(`
 📌🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
_.attp_ Texto
_.ttp_ Texto 
_.ttpd_ Texto
_.style_ texto
_.sticker_ (seleccionando imagen)
_.imagen_ texto
_.cartelera_ (selec imagen)
_.frases_
_.memes_
_.wallpaper_
_.play_ (nombre de la musica)
_.play2_ (nombre del video)
_.anime_
_.google_ (busqueda de wikipedia)
_.traducir_ idioma|texto
_.tts_ texto
_.s_ 
_.bot_ pregunta
*___________________________________*
  ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇƀøŧ.øfɨȼɨȺł
                                        
`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['actividades']
handler.tags = ['info']
handler.command = /^(actividades)$/i

module.exports = handler
