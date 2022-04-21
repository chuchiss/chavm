const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let readmore = readMore
let handler  = async (m, { conn, usedPrefix: _p }) => {

m.reply(`




${readmore}
√
`.trim()) 

}

handler.help = ['']
handler.tags = ['']
handler.command = /^prueba2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.private = false
