let handler = async (m, { conn, usedPrefix }) => {
    let id = m.all
    conn.twit = conn.twit ? conn.twit : {}
    

    let [reason, si, no] = conn.twit[id]
    let mentionedJid = [...si, ...no]
    m.reply(`
      *「 TWITEADO AHORA 」* \n\n
 ${reason}
\n

🔄 *.retwit* 
_Total: ${si.length}_

♥️ *.fav* 
_Total: ${no.length}_


`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['twitear']
handler.tags = ['vote']
handler.command = /^(twit(s)|(list|ver)twits)$/i
handler.group = false
module.exports = handler
