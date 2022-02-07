let handler = async (m, { conn }) => {

let pajak = Math.random()
let xp = 50000
let resulta = global.DATABASE.data.users[m.sender].exp
let result = Math.ceil(xp * pajak)
global.DATABASE._data.users[m.sender].exp += result
global.DATABASE._data.users[m.sender].limit -= 12
let chelo = (resulta + result)
m.reply(`Ganaste ${result} ${chumchi}\n  _tenias un total de_ ${resulta} \n _Ahora tienes_ ${chelo}`)
}
handler.help = ['luck', 'suerte']
handler.tags = ['game']
handler
handler.group = true
handler.command = /^(luck|suerte)$/i
module.exports = handler
