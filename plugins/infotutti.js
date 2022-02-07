let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(`
El primero que completa todo debe decir “Tutti Frutti”, 
y de inmediato, los demás jugadores deberan enviar el mensaje
por donde se quedaron completando las características. 
Luego, 
viene la puntuación: 
· Palabras válidas escritas  se asignan 10 puntos
· Las palabras repetidas, se asignan 5 puntos
 si te falto 2 o 3 características también puedes cantar tutti fruti


también puedes apostar exp, jugar por prendas. etc. 
Que cante Tutti fruti el mejor, a jugar!!
*___________________________________*
  ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇƀøŧ.øfɨȼɨȺł
                                        
`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['it (instrucciones tutti)']
handler.tags = ['info']
handler.command = /^(it)$/i

module.exports = handler
