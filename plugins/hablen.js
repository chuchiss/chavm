const { GroupSettingChange } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix }) => {
        conn.reply(m.chat, `*Grupo abierto con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
   
}

handler.help = ['hablen','abrir']
handler.tags = ['group']
handler.command = /^(hablen|abrir)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
