let handler = async (m, {conn, text}) => {
 global.lolo = {
text1 = 'coso'
text2 = ''
}

m.reply(`              
      ${global.lolo.text1}         
`.trim()) 

}
handler.help = ['']
handler.tags = ['']
handler.command = /^(pru)$/i

module.exports = handler
