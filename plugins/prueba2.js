let handler = async (m, { conn, args, participants }) => {
 if (new Date - global.DATABASE._data.users[m.sender].lastmp > 4400) {
let i = 0
let member = m.isGroup ? participants.find(u => u.jid == member[i]) : {}
  let sortedExp = Object.entries(global.DATABASE.data.users[member[i]]).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users[member[i]]).sort((a, b) => b[1].limit - a[1].limit)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(5, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
 let text = `
• *XP Ranking top ${len}* •
${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' Exp*').join`\n`}

• *Limit Ranking ${len}* •
${sortedLim.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.limit + ' Limit*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len)]
    }
  })
global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['ranking', 'top']
handler.tags = ['xp']
handler.command = /^(prueba2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler



