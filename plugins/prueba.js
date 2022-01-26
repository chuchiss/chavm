let handler = async (m, {conn}) => {
m.reply('eee')
await delay(5000);
m.reply('dufujf')
}
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
