let handler = async (m, {conn}) => {
let lss = {
m.reply('ndndjd')
}
setTimeout(lss, 3000)
m.reply('eee')
}
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
