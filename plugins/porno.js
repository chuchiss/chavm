const axios = require('axios')
let handler = async(m, { conn }) => {
let chat = global.DATABASE._data.chats[m.chat]
    if (chat.porno === enable) {
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
           conn.sendFile(m.chat, `${porn.data.url}`, '', `${porn.data.title}`, m)
global.DATABASE._data.users[m.sender].limit -= 3
  } else return m.reply("porno desactivado")
}
handler.help = ['porno']
handler.tags = ['images']
handler.command = /^(porno)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
