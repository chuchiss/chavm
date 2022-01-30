let handler  = async (m, { conn, text}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
  if (!text){
    conn.reply(m.chat,'Ingresa el link del grupo para añadirme :)\n ejemplo  .nuevogrupo http://whatsapp.com/group=?339493',m)
  }else {
 //   conn.reply(global.owner + '@s.whatsapp.net',`*Grupo enviado de: @${m.sender.split('@')[0]}*\n\n${text}`, m,{contextInfo: {
    //  mentionedJid: [m.sender]
   // }})
    conn.reply(m.chat,`-----------------\n-Ya Puedes agregarme a tu grupo\n-----------------\n\nSeguime en ig http://www.instagram.com/insanebot.oficial \n\n para enterarte de mis últimas actualizaciones además de los números donde estoy online \n\nSabías el hecho importante que es recomendado que los grupos tengan al menos mas de 25 participantes`,m)
  }
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['nuevogrupo *link*']
handler.tags = ['info']
handler.command = /^(nuevo|nuevogrupo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
