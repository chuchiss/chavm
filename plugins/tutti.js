let handler = async (m, {conn}) => {
if (/tutti/.test(command)) return m.reply('you are ready for the tutti frutti? \n Minimo 2 jugadores\nescribe .jugar')
if (/listo/.test(command)) return m.reply('esperando compañero..')
}
handler.help = ['tutti']
handler.tags = ['']
handler.command = /^(tutti)$/i

module.exports = handler
