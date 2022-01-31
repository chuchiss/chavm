let handler = async (m, {conn}) => {
m.reply('you are ready for the tutti frutti? \n Minimo 2 jugadores
functions awaiting(){
 m.reply('esperando compañero..')
}
setTimeout(awaiting, 4000)
}
handler.help = ['tutti']
handler.tags = ['']
handler.command = /^(tutti)$/i

module.exports = handler
