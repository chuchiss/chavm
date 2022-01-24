let handler = async (m, { conn, args }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 4400) {
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].like - a[1].like)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].robos - a[1].robos)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(5, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `
• *LIKES Ranking top ${len}* •
${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.like + ' like*').join`\n`}

• *Robos Ranking ${len}* •
${sortedLim.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.robos + ' Robos*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len)]
    }
  })
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['likes', 'robos']
handler.tags = ['xp']
handler.command = /^(likes|robos)$/i
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



