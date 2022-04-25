let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.lurl)}”`, m)
}
handler.command = /^(prueba2)$/i
handler.help = ['']
handler.tags = ['']
handler.owner = false
handler.mods = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/


global.lurl= [' disk']

