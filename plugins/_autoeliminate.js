let handler = m => m

handler.before = function (m, { user }) {
 let chat = global.DATABASE.data.chats[m.chat]
 if (new Date - chat.eliminate > 65400) {
  delete global.DATABASE.data.msgs
global.DATABASE._data.chats[m.chat].eliminate = new Date * 1
  }
  return true
}

module.exports = handler
