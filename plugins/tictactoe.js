const TicTacToe = require("../lib/tictactoe")

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastme > 25200) {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return conn.reply(m.chat, `Aun estas en juego o esperando contrincante dile qe escriba .ttt para continuar`, m)
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('Exitoso! Creando sala..')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Empieza @${room.game.currentTurn.split('@')[0]}
Para salir del juego escribe abandonar
`.trim()
        if (room.x !== room.o) m.reply(str, room.x, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
        m.reply(str, room.o, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        m.reply('Creando sala.. \nesperando contrincante ..' + (text ? `Escribe el comando a continuación 
${usedPrefix}${command} ${text}` : ''))
        conn.game[room.id] = room
    }
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return m.reply('cargando..')
}

handler.help = ['tateti', 'ttt'].map(v => v + ' [nombre de sala personalizada]')
handler.tags = ['game']
handler.command = /^(tateti|tictactoe|triki|t{3})$/

module.exports = handler
