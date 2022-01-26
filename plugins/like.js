let handler = async (m, { conn, text }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastme > 40400) {
  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `a qien quieres dar like`, m)
  //let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if(isNaN(number)) return 
  if(number.length > 15) return 
  try {
		if(m.quoted.sender) {
			var user = m.quoted.sender
		} 
		} catch (e) {
  } finally {

	
  if(typeof global.DATABASE.data.users[user] == 'undefined') {
  global.DATABASE._data.users[user] = {
			exp: 0,
			limit: 10,
                        like: 0,
			lastclaim: 0,
			warning: 0,
			chat: 0,
			whitelist: false,
			isBanned: false,
			spam: 0
		}
	}
  
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let isAdmin = users.isAdmin || users.isSuperAdmin || false
	let number = user.split('@')[0]

if (m.sender & m.fromMe) return m.reply('no puedes likearte solo')
  
	
	global.DATABASE.data.users[user].like += 1
	var like = global.DATABASE.data.users[user].like
 	if(like > 1220) {
                  global.DATABASE.data.users[user].like -= 1000
                 conn.reply(m.chat, `no puedes tener mas de 1220 likes`, null, {contextInfo: {
          mentionedJid: [user]
 	}})
 } else {
 	conn.reply(m.chat, `*te han puesto _MG_*\n@${number} tienes ${like} likes.`, null, {contextInfo: {
          mentionedJid: [user]
 	}})
}

 
 }
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else m.reply('no puedes dar tantos like intenta luego..')
}
handler.help = ['like  *tag*']
handler.tags = ['main']
handler.command = /^(like|mg)$/i
handler.admin = false
handler.group = true
module.exports = handler
