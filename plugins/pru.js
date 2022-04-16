let handler = async (m, {conn, text}) => {
 global.lolo = {
text1 = ''
text2 = ''
}
if (!text) global.lolo.text2 = text
if (isNaN) global.lolo.text1 = text
m.reply(` 
${global.lolo.text1.push(m.text)}                            
`.trim()) 

}
handler.help = ['']
handler.tags = ['']
handler.command = /^(pru)$/i

module.exports = handler
