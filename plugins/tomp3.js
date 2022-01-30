let { webp2mp4 } = require('../lib/webp2mp4')
let { ffmpeg } = require('../lib/converter')
let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Reply sticker or audio!'
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw 'Reply sticker or audio!'
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp|audio/.test(mime)) {
        out = await webp2mp4(media)
    } 
    await conn.sendFile(m.chat, out, 'out.mp4', null, m)
}
handler.help = ['iphone (tomp3) (reply)']
handler.tags = ['audio']

handler.command = /^(iphone)$/i

module.exports = handler
