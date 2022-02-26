let handler  = async (m, { conn, args }) => {
	if(args || args[0]) {
		let text = args.join` `
		var fr = text
	} else if(m.quoted.text) {
		var fr = m.quoted.text
	} else if(args[0] && m.quoted.text) {
		var fr = m.quoted.text
	} 
	conn.groupUpdateDescription(m.chat, fr)
}
handler.help = ['descripcion *text*']
handler.tags = ['group admin']
handler.command = /^(descripcion|descripción)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
