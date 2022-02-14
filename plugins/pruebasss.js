let PhoneNumber = require('awesome-phonenumber')
let Rimage = require('../lib/image')
let levelling = require('../lib/levelling')

let handler = async (m, { conn }) => {
  let pp = './src/images.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
          await handler()
         delete setInterval
  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, warning, robos, like, banned, regTime, age, level } = global.DATABASE.data.users[who]
    
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nEstado: ' + about : ''}
${exp} Exp
Limit: ${limit}
Mg: ${like}
Advertencias: ${warning} / 5
Robos: ${robos}
Baneado: ${banned ? 'si' : 'no'}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}

handler.help = []
handler.tags = []
handler.command = /^(pruebas)$/i
module.exports = handler
