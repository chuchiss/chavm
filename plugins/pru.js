if(typeof global.lll == 'undefined') {
  global.lll = 0
  }
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

let handler = async (m, {conn, args}) => {
let veces = global.lll
if (veces > 0) {
if (args[0] === global.logi[veces]) { conn.reply(m.chat, `Ganaste `, m)
global.lll -= veces
return
}
  m.reply(`
pregunta: ${global.yeca[veces]}   
Respuesta : ${global.logi[veces]}

${global.lll}


`.trim()) 

} else {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 4400) {

let Numero = Math.ceil(2 * Math.random())
if (!args || !args[0]) {
conn.reply(m.chat, `No es así!\n\n*tenes que po `, m)
return
}
let text = args.join` `

let id = m.chat
global.lll += Numero
let veca = global.lll
//global.lll -= global.lll

//if (args[0] === global.logi[veca]) return conn.reply(m.chat, `Ganaste `, m)

m.reply(`
Pregunta: ${global.yeca[Numero]}   
Respuesta: ${global.logi[Numero]}
${Numero}    
${text}
${global.lll}


`.trim()) 

global.DATABASE._data.users[m.sender].lastme = new Date * 1
 
 } else return
} 
}
}
handler.help = ['']
handler.tags = ['']
handler.command = /^pru$/i

module.exports = handler
