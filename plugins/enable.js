let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'detect':
      chat.detect = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    case 'antidelete':
      chat.delete = !isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'link':
      chat.alink = isEnable
      break
    case 'porno': 
      chat.porno = isEnable 
      break
    default:
      return m.reply(`
◽Opciones:
_welcome_ | _delete_ | _antilink_ | _detect_ | _link_ | _porno_
▫️Ejemplo:
${usedPrefix}enable _welcome_
${usedPrefix}disable _welcome_
`.trim())
  }
  m.reply(`
*${type}* ahora esta *${isEnable ? 'ACTIVO✔️' : 'DESACTIVADO✖️'}* ${isAll ? 'en este bot' : isUser ? '' : 'en este chat'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group admin', 'group']
handler.command = /^(((act)ivar|(des)activar)|(en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler
