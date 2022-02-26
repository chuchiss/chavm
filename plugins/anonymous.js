async function handler(m, { conn, command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'salir': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return conn.reply(m.chat, '_no estás en anonymous chat_ \n para empezar un chat pon .chatear', m)
            m.reply('Saliste del chat anonymous')
            let other = room.other(m.sender)
            if (other) await conn.reply(other, '_El anonymous con el que hablabas abandonó el chat_', m)
            delete this.anonymous[room.id]
            if (command === 'salir') break
        }
        case 'chatear': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return conn.reply(m.chat, '_Bienvenido a anonymous chat_\n _Buscando conexión.._ \npara salir escribe .salir', m)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await conn.reply(room.a, '_Conexion exitosa!_\n para pasar de chat escribe .next', m)
                room.b = m.sender
                room.state = 'CHATTING'
                await conn.reply(room.a, '_Conexion exitosa!_\n para pasar de chat escribe .next', m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await conn.reply(m.chat, '_Buscando conexión_ ..\n para salir escribe .salir', m)
            }
            break
        }
    }
}
handler.help = ['chatear', 'salir', 'next']
handler.tags = 'anony'
handler.command = ['chatear', 'salir', 'next']

handler.private = true

module.exports = handler
