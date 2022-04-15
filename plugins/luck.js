let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 12000) {
function chuqui(){
if (global.DATABASE._data.users[m.sender].limit < 10) return m.reply('No tienes mas limites para comprar pon .buy')
let pajak = Math.random()
let xp = 10000
let resulta = global.DATABASE.data.users[m.sender].exp
let result = Math.ceil(xp * pajak)
global.DATABASE._data.users[m.sender].exp += result
global.DATABASE._data.users[m.sender].limit -= 10
let chelo = (resulta + result)
let tocno = global.DATABASE._data.users[m.sender].limit
let chenchy = (result - 5000)
if (result < 5000) return conn.reply(m.chat, `*Perdiste* ${-chenchy} xp\n - _Tenias un total de_ ${resulta} xp\n -- _Ahora tienes_ ${chelo} xp \n --- _Limites totales_ ${tocno}`, m)
conn.reply(m.chat, `*Ganaste* *${chenchy}* xp \n  - _Tenias un total de_ ${resulta}\n -- _Ahora tienes_ ${chelo} xp \n --- _Limite totales_ ${tocno}`, m)
}
function prueba(){
conn.reply(m.chat, `*Prueba tu suerte check*🤙 \n ▫️Gana hasta el doble de exp \n ▫️Costo 10 limites\n \n Cargando....`, m)
}
setTimeout(prueba, 1000)
setTimeout(chuqui, 12000)
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['luck', 'suerte']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(luck|suerte)$/i
module.exports = handler
