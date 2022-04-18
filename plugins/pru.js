
global.yeca = [
'hola',
'a que se dedica bad bunny',
'cuantos años tiene mirta legrand',
]
global.logi = [
'funda',
'cantante',
'muchos'
]
let handler = async (m, {conn, usedPrefix, args}) => {
let veces = global.lll
if (global.lll > 0) {
if (args[0] === global.logi[veces]) { conn.reply(m.chat, `Ganaste +100 exp`, m)
global.lll -= veces
return
}
  m.reply(`

*pregunta:* ${global.yeca[veces]}   
Respuesta : ${global.logi[veces]}


_para_ _contestar_ _utiliza_ 
_${usedPrefix}respuesta_ _ejemplo_

`.trim()) 

} else {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 4400) {

let Numero = Math.ceil(2 * Math.random())
//if (!args || !args[0]) {
//conn.reply(m.chat, `No es así!\n\n*tenes que po `, m)
//return
//}
let text = args.join` `

let id = m.chat
global.lll += Numero
let veca = global.lll
//global.lll -= global.lll 
//if (args[0] === global.logi[veca]) return conn.reply(m.chat, `Ganaste `, m)

m.reply(`
Pregunta: ${global.yeca[Numero]}   
Respuesta: ${global.logi[Numero]}
 



`.trim()) 
if(typeof global.lll == 'undefined' && global.lll == 'NaN') {
  global.lll = 0
  }
global.DATABASE._data.users[m.sender].lastme = new Date * 1
 
 } else return
} 

}
handler.help = ['']
handler.tags = ['']
handler.command = /^pru$/i

module.exports = handler
