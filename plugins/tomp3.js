const { toAudio } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) return m.reply('error')
  let media = await q.download()
  let audio = await toPTT(media, 'mp3')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m, mimetype: 'audio/mp3'
  })
}
handler.help = ['iphone tomp3 (reply)']
handler.tags = ['audio']

handler.command = /^iphone$/i

module.exports = handler
