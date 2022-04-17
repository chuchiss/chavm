let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 4400) {
global.yeca = [ 'hola','numero'
]
global.logi = [ 'funda','cepillo'
]
let Numero = Math.random(0, 1)


m.reply(`
${global.yeca[0]}   
Respuesta : ${global.logi[0]}
${Numero}                       
`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['']
handler.tags = ['']
handler.command = /^pru$/i

module.exports = handler
