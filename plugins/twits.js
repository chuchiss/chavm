let handler = async (m, { conn, usedPrefix }) => {
    let id = m.all
    conn.twit = conn.twit ? conn.twit : {}
    

    let [reason, si, no] = conn.twit[id]
    let mentionedJid = [ ...si, ...no]
    m.reply(`
      *「 TWITEADO AHORA 」* \n\n
 ${reason}
\n

🔄 *.retwit* 
_Total: ${si.length}_
${si.map(u => '@' + u.split('@')[0]).join('\n')}

♥️ *.fav* 
_Total: ${no.length}_


`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['twitear']
handler.tags = ['vote']
handler.command = /^(twit|twits|(list|ver)twits)$/i
handler.group = false
module.exports = handler
