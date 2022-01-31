const crypto = require('crypto')

const xp_first_time = 1500
const xp_link_creator = 5000
const xp_bonus = {
    5: 20000,
   10: 50000,
   20: 125000,
   50: 500000,
  100: 10900000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.DATABASE._data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) return m.reply('Código de recompensa no válido')
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Exitoso!
+${xp_first_time} XP
`.trim())
    m.reply(`
Alguien ha usado su código de recompensa
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}rec ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Obtenga ${xp_first_time} XP para aquellos que usan el enlace/código de recompensa a continuación
Codigo de recompensa: *${code}*
${command_link}
`.trim()
    m.reply(`
Obtenga ${xp_link_creator} XP por cada nuevo usuario que use su código de recompensas\n
En total es ${users[m.sender].ref_count} la gente que ha utilizado su código de recompensas
Codigo de recompensa: ${code}\n
Comparte este enlace con amigos ${command_link}\n
O enviales un mensaje directo wa.me/?text=${encodeURIComponent(share_text)}
${Object.entries(xp_bonus).map(([count, xp]) => ` \n${count} Personas = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(rec|recompensa|recompensas)$/i

handler.register = false

module.exports = handler
