let handler = async (m, {conn}) => {
m.reply('eee')
}
function dss() {
m.reply('ndndjd')
}
setTimeout(dss, 3000)
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
