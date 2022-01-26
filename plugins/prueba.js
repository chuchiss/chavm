let handler = async (m, {conn}) => {
if (m.messageTimestamp.toNumber() > 7){
m.reply('eee')
}
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
