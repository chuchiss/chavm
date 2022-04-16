let handler = async (m, {conn, text}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(` ${text}                            
`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(pru)$/i

module.exports = handler
