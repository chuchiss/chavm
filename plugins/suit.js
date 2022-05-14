const pilihan = ['piedra', 'papel', 'tijera']
const Case = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
let handler = async (m, { text, usedPrefix }) => {
    let salah = `Opciones disponibles Tijeras, Papel, Piedra\n\n*Más usado* : ${usedPrefix}suit tijera\n`
    if (!text) return m.reply(` ${salah}`)
    if (!pilihan.includes(text.toLowerCase())) throw salah
    let suitP1 = pilihan.indexOf(text.toLowerCase())
    let suitPC = Math.floor(Math.random() * 3)
    let kamu = Case(pilihan[suitP1])
    let bot = Case(pilihan[suitPC])
    let state = `Kamu: ${kamu}\nBot: ${bot}`
    let user = global.DATABASE._data.users[m.sender]
    if (suitP1 === suitPC) {
        user.exp += 100
        m.reply(`*Empate*\n\n${state}\n\nPoin (±)100 XP`)
    } else if ((suitP1 + 1) % 3 === suitPC) {
        user.exp += 300
        m.reply(`*Tu ganas*\n\n${state}\n\nPoin (+)300 XP`)
    } else if ((suitP1 - 1) % 3 === suitPC) {
        user.exp -= 300
        m.reply(`*Tú pierdes*\n\n${state}\n\nPoin (-)300 XP`)
    } else return m.reply(` Terjadi kesalahan`)
}
handler.help = ['suit [gunting|batu|kertas]']
handler.tags = ['game']

handler.command = /^suit$/i

module.exports = handler
