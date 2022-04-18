
global.yeca = [
'hola',
'a que se dedica bad bunny',
'cuantos años tiene mirta legrand',
'Cuál es el lugar más frío de la tierra',
'en que año el hombre piso la luna'
]
global.logi = [
'funda',
'cantante',
'muchos',
'la antartida',
'1969'
]
let handler = async (m, {conn, usedPrefix, args, command}) => {
let veces = global.lll
if (global.lll > 0) {
if (args[0] === global.logi[veces]) { conn.reply(m.chat, `Ganaste +100 exp`, m)
global.lll -= veces
global.DATABASE._data.users[m.sender].exp += 100
return
}
if (/paso/i.test(command)) {
        global.lll -= veces
    }
//Respuesta : ${global.logi[veces]}
//Respuesta: ${global.logi[Numero]}
  m.reply(`

*pregunta:* ${global.yeca[veces]}   



_para_ _contestar_ _utiliza_ 
_${usedPrefix}respuesta_ _ejemplo_

`.trim()) 

} else {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 4400) {


let Numero = Math.ceil(4 * Math.random())
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
handler.command = /^(pre(guntados)?|paso|res(puesta)?)$/i

module.exports = handler
