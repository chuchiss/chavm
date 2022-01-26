let handler = async (m, {conn}) => {
m.reply('eee')
setTimeout (lento(){
m.reply('dufujf')}, 2000)
await lento()
}
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
