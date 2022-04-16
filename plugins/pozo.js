let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 12000) {
function chuqui(){
if (global.DATABASE._data.users[m.sender].limit < 10) return m.reply('No tienes mas limites para comprar pon .buy')
let pajak = Math.random()
let xp = 10000
let resulta = global.DATABASE.data.users[m.sender].exp
let result = Math.ceil(xp * pajak)
if (global.DATABASE._data.users[m.sender].limit < 10) return m.reply('No tienes mas limites para comprar pon .buy')
let costo = 5000
let veces = global.DATABASE.data.chat[m.chat].pozo
let ero = pickRandom(global.funi)
let total = (veces * 10000 / 2)
global.DATABASE._data.users[m.sender].exp += result
global.DATABASE._data.users[m.sender].limit -= 10
let chelo = (resulta + result)
let tocno = global.DATABASE._data.users[m.sender].limit
let chenchy = (result - 5000)
if (result < 5000) return conn.reply(m.chat, `*Perdiste* ${-chenchy} xp\n - _Tenias un total de_ ${resulta} xp\n -- _Ahora tienes_ ${chelo} xp \n --- _Limites totales_ ${tocno}`, m)
conn.reply(m.chat, `*Ganaste* *${chenchy}* xp \n - _Tenias un total de_ ${resulta}xp\n -- _Ahora tienes_ ${chelo} xp \n --- _Limite totales_ ${tocno}`, m)
}
function prueba(){
conn.reply(m.chat, `*Pozo acumulado🤙 \n ▫️ total del pozo \n  ▫️ Pozo minimo ${costo} \n \n Cargando....`, m)
}
setTimeout(prueba, 1000)
setTimeout(chuqui, 12000)
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['luck']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pozo)$/i
module.exports = handler
