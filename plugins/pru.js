

let handler = async (m, {conn, args}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 4400) {
global.yeca = [ 'hola','numero','castilll'
]
global.logi = [ 'funda','cepillo','coron'
]
let Numero = Math.ceil(2 * Math.random())
if (!args || !args[0] && !global.lll === 0) {
delete global.lll[id]
conn.reply(m.chat, `No es así!\n\n*tenes que po ${Numero}`, m)
return
}
let text = args.join` `
if (args[0] === global.logi[Numero]) return conn.reply(m.chat, `Ganaste `, m)
let id = m.chat
global.lll[id] =['1']



m.reply(`
${global.yeca[Numero]}   
Respuesta : ${global.logi[Numero]}
${Numero}    
${text}
${global.lll}

`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['']
handler.tags = ['']
handler.command = /^pru$/i

module.exports = handler
