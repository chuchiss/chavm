
let handler = async (m, {conn, usedPrefix}) => {

if (global.lll > 0) {

//Respuesta : ${global.logi[veces]}
//Respuesta: ${global.logi[Numero]}
  m.reply(`

*pregunta:* ¿ ${global.yeca[veces]} ?

_Solo minusculas_

_para_ _contestar_ 
_escribe la respuesta_
_si es correcto Ganarás!_

`.trim()) 
return
} 



let veces = global.lll
let Numero = Math.ceil(5 * Math.random())
//if (!args || !args[0]) {
//conn.reply(m.chat, `No es así!\n\n*tenes que po `, m)
//return
//}
//let text = args.join` `

let id = m.chat
global.lll += Numero
let veca = global.lll
//global.lll -= global.lll 
//if (args[0] === global.logi[veca]) return conn.reply(m.chat, `Ganaste `, m)

m.reply(`
Pregunta: ¿ ${global.yeca[Numero]}   ?

Tiempo: 5 minutos
 
Si quieres cambiar de pregunta
escribe ${usedPrefix}paso
${global.lll}

`.trim()) 
setTimeout(()=> {
 if(global.lll > 1) { global.lll -= global.lll}
return 
}, 3000)

if(typeof global.lll == 'undefined' || 'NaN') {
  global.lll = 0
  }



}
handler.help = ['']
handler.tags = ['']
handler.command = /^(preguntados)$/i

module.exports = handler




global.yeca = [
'hola',
'a que se dedica Bad Bunny',
'cuantos años tiene mirta legrand',
'Cuál es el lugar más frío de la tierra',
'en que año el hombre piso la luna',
'a que se dedica Jackie Chan'
] 
global.logi = [
'funda',
'cantante',
'muchos',
'la antartida',
'1969',
'actor'
]
