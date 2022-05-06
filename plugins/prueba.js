let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler  = async (m, { conn, args, usedPrefix, command, isLimit, isPrems, isOwner}) => {

	if (!args || !args[0]) return conn.reply(m.chat, `No es así!\n\n*tenes que poner* : _${usedPrefix + command} Hola_`, m)
          let lang = 'id'
	let text = args.join` `
	fetch("https://api-sv2.simsimi.net/v2/?text=" + encodeURIComponent(text) + "&lc=es")
  .then(res => res.json())
  .then(batch => {
    conn.updatePresence(m.chat, Presence.composing)
  conn.reply(m.chat, `${batch.success}`, m)
  }) .catch(() => { conn.reply(m.chat, `_Perdón :(_`, m) })
if (!isPrems && !isOwner) global.DATABASE._data.users[m.sender].limit -= 1

res = await ttsi(batch.success)
  conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^prueba$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = false
module.exports = handler

function ttsi(text, lang = 'id') {
  console.log(lang, batch.success)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, batch.success, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}






