const { GroupSettingChange } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
    if (args[0] === 'open') {
        conn.reply(m.chat, `*Grupo abierto con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
    } else if (args[0] === 'close') {
        conn.reply(m.chat, `*Grupo cerrado con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
    } else if (args[0] === 'abrir') {
        conn.reply(m.chat, `*Grupo abierto con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
    } else if (args[0] === 'cerrar') {
        conn.reply(m.chat, `*Grupo cerrado con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
    } else {
        return conn.reply(m.chat, `*Ejemplo : ${usedPrefix}group open*`, m)
    }
}

handler.help = ['group <open|close>','group abrir|cerrar']
handler.tags = ['group admin']
handler.command = /^(group|grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
