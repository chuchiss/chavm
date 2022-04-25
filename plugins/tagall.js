let handler = async (m, { conn, text, participants }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastrob > 10000) {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.command = ['tagall']

handler.admin = true
handler.group = true
handler.premium = true
handler.limit = true
module.exports = handler
