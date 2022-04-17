let handler = async (m, { conn, users }) => {
  conn.reply(m.chat, `*∆`, m)
}
handler.help = ['pozo']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pozo$/i
module.exports = handler
