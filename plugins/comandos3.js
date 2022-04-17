let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(`
        ➿🄹🅄🄴🄶🄾🅂
_.mate_ medium (ganar exp)
_.adiv_ start (ganar exp)
_.tateti_
_.tutti_ (beta)
_.luck_
_.pozo_
_proximo a salir preguntados..._
*___________________________________*
  ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇƀøŧ.øfɨȼɨȺł
                                        
`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['juegos']
handler.tags = ['info']
handler.command = /^(juegos|game)$/i

module.exports = handler
