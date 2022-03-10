let handler = async (m, { conn, isPrems, isOwner, text, usedPrefix }) => {
if (text.lenght > 18) return conn.reply(m.chat, 'Lo siento, texto demasiado largo, máximo 80 caracteres!', m)
if (new Date - global.DATABASE._data.users[m.sender].lastme > 10400) {
    
    conn.twit = conn.twit ? conn.twit : {}
    let id = m.all
    if ( global.DATABASE._data.users[m.sender].limit < 30) return m.reply('minimo 30 limits disponibles para tw - cada tw cuesta 6 + iva')
    if (!text) return m.reply('twit vacío!  .twittear esto es un ejemplo')
    
    m.reply(`¡twuiteado !\n*${usedPrefix}twits  para ver los twits`)
    conn.twit[id] = [
        text,
        [],
        [],
        []
    ]
if (!isPrems && !isOwner) global.DATABASE._data.users[m.sender].limit -= 7
 global.DATABASE._data.users[m.sender].lastmp = new Date * 1

} else m.reply('Cargando..')
}
handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(tw|(twit|twi)tear)$/i
handler.limit = true
handler.group = true
handler.admin = false
module.exports = handler
