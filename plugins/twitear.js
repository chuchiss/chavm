let handler = async (m, { conn, isPrems, isOwner, text, user, usedPrefix }) => {
    conn.twit = conn.twit ? conn.twit : {}
    let id = m.all
    if ( global.DATABASE._data.users[m.sender].limit < 50) return m.reply('minimo 50 limits disponibles y cuesta 6 + iva')
    if (!text) return m.reply('twit vacío!  .twittear esto es un ejemplo')
    m.reply(`¡twuiteado !\n*${usedPrefix}twits  para ver los twits`)
    conn.twit[id] = [
        text,
        [],
        [],
        []
    ]
if (!isPrems && !isOwner) global.DATABASE._data.users[m.sender].limit -= 7
    

}
handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(tw|(twit|twi)tear)$/i
handler.limit = true
handler.group = false
handler.admin = false
module.exports = handler
