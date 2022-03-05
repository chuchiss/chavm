let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    

    let [reason, si, no] = conn.vote[id]
    let mentionedJid = [...si, ...no]
    m.reply(`
      *「 twits 」* \n\n
*Razon:* ${reason} \n
*SI*
_Total: ${si.length}_
${si.map(u => '@' + u.split('@')[0]).join('\n')}
\n
*NO*
_Total: ${no.length}_
${no.map(u => '@' + u.split('@')[0]).join('\n')}
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['twitear']
handler.tags = ['vote']
handler.command = /^(twits|(list|ver)twits)$/i
handler.group = true
module.exports = handler
