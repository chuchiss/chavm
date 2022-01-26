let handler = async (m, {conn}) => {
m.reply('eee')
setTimeout ((){
m.reply('dufujf'), 2000)}
}
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
