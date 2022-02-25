const { GroupSettingChange } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix }) => {
        conn.reply(m.chat, `*Grupo cerrado con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
   
}

handler.help = ['callense <cerrar grupo>','cerrar']
handler.tags = ['group']
handler.command = /^(callense|cerrar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
