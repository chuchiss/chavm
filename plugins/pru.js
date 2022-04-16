let handler = async (m, {conn, text}) => {
 global.lolo = {
text1 = ''
text2 = ''
}

if (!isNaN) global.lolo.text1 = text
m.reply(` ${global.lolo.text1}                            
`.trim()) 

}
handler.help = ['']
handler.tags = ['']
handler.command = /^(pru)$/i

module.exports = handler
