let handler = async (m, { conn }) => {

function chuqui(){
if (global.DATABASE._data.users[m.sender].limit < 10) return m.reply('No tienes mas limites para comprar pon .buy')
let pajak = Math.random()
let xp = 25000
let resulta = global.DATABASE.data.users[m.sender].exp
let result = Math.ceil(xp * pajak)
global.DATABASE._data.users[m.sender].exp += result
global.DATABASE._data.users[m.sender].limit -= 10
let chelo = (resulta + result)
conn.reply(m.chat, `*Ganaste* *${result}*\n  - _Tenias un total de_ ${resulta} \n -- _Ahora tienes_ ${chelo}`, m)
}
function prueba(){
conn.reply(m.chat, `Prueba tu suerte check🤙 \n ▫️Gana hasta 30 mil exp \n ▫️Costo 10 limites\n \n Cargando....`, m)
}
setTimeout(prueba, 1000)
setTimeout(chuqui, 12000)
}
handler.help = ['luck', 'suerte']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(luck|suerte)$/i
module.exports = handler
