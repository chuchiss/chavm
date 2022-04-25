let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(`
 📌🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
│.attp Texto
│.ttp Texto 
│.style texto
│.sticker (seleccionando imagen)
│.imagen texto
│.frases
│.memes
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
