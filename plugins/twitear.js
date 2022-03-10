
conn.twit = conn.twit ? conn.twit : {}
let handler = async (m, { conn, isPrems, isOwner, text, usedPrefix }) => {
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let isLink = linkRegex.exec(m.text)
if (!isLink) {
    
    
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
} else
let users = global.DATABASE._data.users
               users[m.sender].banned = true
               setTimeout(()=> {
let users = global.DATABASE._data.users
users[m.sender].banned = false
console.log('desbloqueado al usuario') 
return
}, 10000)
}
handler.help = ['twitear (que esta pasando)']
handler.tags = ['vote']
handler.command = /^(tw|(twit|twi)tear)$/i
handler.limit = true
handler.group = true
handler.admin = false
module.exports = handler
