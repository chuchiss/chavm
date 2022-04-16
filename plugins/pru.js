let handler = async (m, {conn, text}) => {
 global.lolo = {
text1 = ''
text2 = ''
}
if (text in (global.lolo.text1)) global.lolo.text2 = text
if (!isNaN) global.lolo.text1 = text
m.reply(` ${global.lolo.text1}
${global.lomo.text2}                            
`.trim()) 

}
handler.help = ['']
handler.tags = ['']
handler.command = /^(pru)$/i

module.exports = handler
