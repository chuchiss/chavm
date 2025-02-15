let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    m.reply(`Se unió con éxito al grupo
    ${res.gid}\n acordate de seguirme\n @Rodri.molina_ `)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['group admin','group tools']

handler.command = /^joiness$/i

handler.prems = false

module.exports = handler
