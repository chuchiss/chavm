let handler = async (m, { conn }) => {

if (global.DATABASE._data.users[m.sender].limit < 10) return m.reply('No tienes mas limites para comprar pon .buy')
let pajak = Math.random()
let xp = 35000
let resulta = global.DATABASE.data.users[m.sender].exp
let result = Math.ceil(xp * pajak)
global.DATABASE._data.users[m.sender].exp += result
global.DATABASE._data.users[m.sender].limit -= 10
let chelo = (resulta + result)
m.reply(`*Ganaste* *${result}*\n  - _Tenias un total de_ ${resulta} \n -- _Ahora tienes_ ${chelo}`)
}
handler.help = ['luck', 'suerte']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(luck|suerte)$/i
module.exports = handler
