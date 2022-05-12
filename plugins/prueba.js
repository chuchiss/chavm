let { MessageType, Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 2200) {
	await conn.updatePresence(m.chat, Presence.composing) 
	let member = participants.map(u => u.jid)
	if(!text) {
		var sum = member.length
	} else {
		var sum = text
	}
	var total = 0
	var sider = []
	for(let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.jid == member[i]) : {}
		if((typeof global.DATABASE.data.users[member[i]] == 'undefined' || global.DATABASE.data.users[member[i]].exp > 500)) { 
			if (typeof global.DATABASE.data.users[member[i]] !== 'undefined'){
				if(global.DATABASE.data.users[member[i]].whitelist == false){
					total++
					sider.push(member[i])
				}
			}else {
				total++
				sider.push(member[i])
			}
		}
	}
	//if(total == 0) return conn.reply(m.chat, `*Este grupo no tiene fantasmas:D.*`, m) 
	// conn.reply(m.chat, `*[ SIDER CHECK ]*\n\n*Grup ${conn.getName(m.chat)}, memiliki anggota ${sum} orang dan terdapat sider (penyimak profesional) sebanyak ${total} orang.*\n\n*NB* : *“Akurasi dari fitur ini akan mencapai 85% apabila BOT sudah berada didalam grup minimal 7hr dan fitur ini tidak menghitung admin sider.”*${%readmore}\n\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '')).join('\n')}`, m,{ contextInfo: { mentionedJid: sider } })
	conn.reply(m.chat, `*[ Ranking top 3 ]*\n\n*Grupo ${conn.getName(m.chat)}, \n${sider.map(v => '  ○ @' + v.replace(/@.+/, '')).join('\n')}`, m,{ contextInfo: { mentionedJid: sider } })
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['sider']
handler.tags = ['group']
handler.command = /^(prueba)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.limit = true
handler.botAdmin = true
handler.fail = null
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
