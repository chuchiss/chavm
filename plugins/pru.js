

let handler = async (m, {conn, text}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 4400) {
global.yeca = [ 'hola','numero','castilll'
]
global.logi = [ 'funda','cepillo','coron'
]
let Numero = Math.ceil(2 * Math.random())
let res = global.yogi[Numero]
if (text == res) return m.reply('bien')


m.reply(`
${global.yeca[Numero]}   
Respuesta : ${global.logi[Numero]}
${Numero}     

`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['']
handler.tags = ['']
handler.command = /^pru$/i

module.exports = handler
