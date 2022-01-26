let handler = async (m, {conn}) => {
m.reply('eee')
}
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
