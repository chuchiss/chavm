let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.all
    conn.twit = conn.twit ? conn.twit : {}
    if (!(id in conn.twit)) return 
    let isVote = conn.twit[id][1].concat(conn.twit[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) return conn.reply(m.chat, `ya haz votado `, m)
    if (/retwit/i.test(command)) {
        conn.twit[id][1].push(m.sender)
       global.DATABASE._data.users[m.sender].exp += 1000
        m.reply ('Retwiteado +200 exp')
       return
    } else if (/fav/i.test(command)) {
        conn.twit[id][2].push(m.sender)
        global.DATABASE._data.users[m.sender].exp += 1000
        m.reply ('Faveado +200 exp')
       return
    } else if (/eliminar/i.test(command)) {
        conn.twit[id][3].push(m.sender)
        if (conn.twit[id][3] > 2) delete conn.twit[id]
    }
}
handler.help = ['retwit', 'fav']
handler.tags = ['vote']
handler.command = /^(retwit|fav|eliminar)$/i
handler.group = true
module.exports = handler
