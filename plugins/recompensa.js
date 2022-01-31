const crypto = require('crypto')

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.DATABASE._data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
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
    let command_text = `${usedPrefix}recompensa ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Obtenga ${xp_first_time} XP para aquellos que usan el enlace/código de referencia a continuación
Codigo de recompensa: *${code}*
${command_link}
`.trim()
    m.reply(`
Obtenga ${xp_link_creator} XP por cada nuevo usuario que use su código de referencia
${users[m.sender].ref_count} es la gente que ha usado su código de referencia
Codigo de recompensa: ${code}\n
Comparte el enlace con amigos ${command_link}\n
O dile que envie un mensaje con este link wa.me/?text=${encodeURIComponent(share_text)}
${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['']
handler.tags = ['']
handler.command = /^recompensa$/i

handler.register = false

module.exports = handler
