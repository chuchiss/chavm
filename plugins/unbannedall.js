let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let list = Object.entries(global.DATABASE.data.users)
	if(!args || !args[0]) {
		var lim = false
	} else {
		var lim = parseInt(args[0])
	}
	list.slice(0, list.length).map(([user, data], i) => (Number(data.banned = lim)))
		conn.reply(m.chat, `*baneados restablecido con éxito ${lim} / user*`, m)
}
handler.help = ['unbanall']
handler.tags = ['owner']
handler.command = /^unbanall?$/i
handler.limit = false
handler.rowner = true

module.exports = handler
