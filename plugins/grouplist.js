let handler = async (m, { conn }) => {
  let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  conn.reply(m.chat, 'Lista de Groups:\n' + txt, m)
}
handler.help = ['groups', 'grouplist','grupos']
handler.tags = ['info']
handler.command = /^(grupos|group(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
