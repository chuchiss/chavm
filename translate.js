// ariffb - http:/wa.me/6283128734012
const translate = require('translate-google-api')
let handler = async (m, { conn, text, usedPrefix }) => {
    goblok = `ejemplo: \n${usedPrefix}tr codigo de idioma|texts\n${usedPrefix}tr en|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`
    if (!text) return conn.reply(m.chat, `Por favor marque/seleccione  el texto a traducir y escriba el idioma a traducir ejemplo: \n\n${usedPrefix}tr es   \n para traducir al español \n \n${usedPrefix}tr en  \n para traducir al ingles  \n no te olvides de marcar el texto a traducir\n Idiomas admitidos: https://cloud.google.com/translate/docs/language`, m)
    
    let to = text
    let trans = m.quoted.text

    if (!to) return conn.reply(m.chat, `Por favor marque/seleccione  el texto a traducir y escriba el idioma a traducir ejemplo: \n\n${usedPrefix}tr es   \n para traducir al español \n \n${usedPrefix}tr en  \n para traducir al ingles  \n no te olvides de marcar el texto a traducir\n Idiomas admitidos: https://cloud.google.com/translate/docs/language`, m)
    if (!trans) return conn.reply(m.chat, `Por favor marque/seleccione  el texto a traducir y escriba el idioma a traducir ejemplo: \n\n${usedPrefix}tr es   \n para traducir al español \n \n${usedPrefix}tr en  \n para traducir al ingles  \n no te olvides de marcar el texto a traducir\n Idiomas admitidos: https://cloud.google.com/translate/docs/language`, m)
    
    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(`_Tu: ${trans}_\n*Traduccion: ${result[0]}*`)
        console.log(result[0])
    } catch (e) {
        return conn.reply(m.chat, ` Por favor marque/seleccione  el texto a traducir y escriba el idioma a traducir ejemplo: \n\n${usedPrefix}tr es   \n para traducir al español \n \n${usedPrefix}tr en  \n para traducir al ingles  \n no te olvides de marcar el texto a traducir\n Idiomas admitidos: https://cloud.google.com/translate/docs/language`, m)
     }

}
handler.help = ['traducir'].map(v => v + '  idioma|texto')
handler.tags = ['tools']
handler.command = /^(tr(aducir)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

 



