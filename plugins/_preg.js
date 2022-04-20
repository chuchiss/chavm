let handler = m => m
let debugMode = !1

let winScore = 500
let playScore = 50

handler.before = function (m, { user }) {
    let ok
    let isWin = !1
    let isTie = !1
    let isSurrender = !1
    this.gume = this.gume ? this.gume : {}
    let room = Object.values(this.gume).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.gume.playerX, room.gume.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
setTimeout(()=> {
return delete this.gume[room.id]
}, 600000)
        // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
        if (!/^([1-9]|abandonar|rendirme)$/i.test(m.text)) return !0
        isSurrender = !/^[1-9]$/.test(m.text)
        if (m.sender !== room.gume.currentTurn) { // nek wayahku
            if (!isSurrender) return !0
        }
        if (debugMode) m.reply('[DEBUG]\n' + require('util').format({
            isSurrender,
            text: m.text
        }))
        if (!isSurrender && 1 > (ok = room.gume.turn(m.sender === room.gume.playerO, parseInt(m.text) - 1))) {
            m.reply({
                '-3': 'Game telah berakhir',
                '-2': 'Invalid',
                '-1': 'Posisi Invalid',
                0: 'Posisi Invalid',
            }[ok])
            return !0
        }
        if (m.sender === room.gume.winner) isWin = true
        else if (room.gume.board === 511) isTie = true
        let arr = room.gume.render().map(v => {
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
        if (isSurrender) {
            room.gume._currentTurn = m.sender === room.gume.playerX
            isWin = true
        }
        let winner = isSurrender ? room.gume.currentTurn : room.gume.winner
        let str = `
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Gano! (+${winScore} XP)` : isTie ? `Juego empatado (+${playScore} XP)` : `Le toca a ${['❌', '⭕'][1 * room.gume._currentTurn]} (@${room.gume.currentTurn.split('@')[0]})`}
Escribe abandonar para salir del juego
`.trim()
        let users = global.DATABASE._data.users
        if ((room.gume._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.gume._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
        if (room.x !== room.o) m.reply(str, room.x, {
            contextInfo: {
                mentionedJid: this.parseMention(str)
            }
        })
        m.reply(str, room.o, {
            contextInfo: {
                mentionedJid: this.parseMention(str)
            }
        })
        if (isTie || isWin) {
            users[room.gume.playerX].exp += playScore
            users[room.gume.playerO].exp += playScore
            if (isWin) users[winner].exp += winScore - playScore
            if (debugMode) m.reply('[DEBUG]\n' + require('util').format(room))
            delete this.gume[room.id]
        }
    }
    return !0
}

module.exports = handler
