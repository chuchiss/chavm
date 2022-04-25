let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(`
    📍Principal📍
_.menu_
_.perfil_
_.ranking_
_.comandos_
_.Buy_ (comprar exp)
_.buyall_ (comprar toda la exp)
_.reclamar_
_.pagar_ @mension <cantidad de exp>
_.robar_ @mension <cantidad de exp>
_.ping_
_.politica_
_.creditos_
*___________________________________*
  ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇƀøŧ.øfɨȼɨȺł
                                        
`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['principal']
handler.tags = ['info']
handler.command = /^(principal)$/i

module.exports = handler
