let fs = require ('fs')
let path = require('path')
let os = require('os')
let { performance } = require('perf_hooks')
let handler  = async (m, { conn, usedPrefix: _p }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastme > 12400) {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let neww = performance.now()
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
      'main': '𝗠𝗘𝗡𝗨',
      'xp': '𝗘𝘅𝗽 & 𝗟𝗶𝗺𝗶𝘁',
      'sticker': '𝗦𝘁𝗶𝗰𝗸𝗲𝗿',
      'kerang': '𝗝𝘂𝗲𝗴𝗼𝘀',
      'game': 'Juegoss',
      'images' : 'Imagenes',
      'data' : 'Informacion',
      'admin': '𝗔𝗱𝗺𝗶𝗻',
      'group': 'Grupos',
      'internet': '𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁',
      'vote': 'Votacion',
      'downloader': 'Descargas',
      'tools': 'Herramientas',
      'audio': 'personalizar audios(mantenimiento)',
      'fun': 'Habla conmigo',
      'anony': 'Chat anónimos',
      'jadibot': 'Solo persona autorizada',
      'owner': 'Owner 𝗺𝗲𝗻𝘂',
      'host': '𝗛𝗼𝘀𝘁',
      'advanced': 'Avanzado',
      'info': '𝗜𝗻𝗳𝗼',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    function monospace(string) {
    let _3 = '`'.repeat(3)
    return _3 + string + _3
}
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
╭╭─「⚫🄿🅁🄸🄽🄲🄸🄿🄰🄻」
│ Tienes *%limit Limit* *%exp XP* 
│.menu
│.perfil
│.ranking
│.top2
│.comandos
│.buy (comprar exp)
│.buyall (comprar toda la exp)
│.reclamar
│.pagar @mension <cantidad de │exp>
│.robar @mension <cantidad de │exp>
│.link
│.ping
│.politica
│.creditos
╰────
%readmore
╭─「🔹🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
│.attp Texto
│.ttp Texto 
│.style texto
│.sticker (seleccionando imagen)
│.imagen texto
│.frases
│.memes
│.play (nombre de la musica)
│.play2 (nombre del video)
│.random (canción random)
│.stickerly
│.estados
│.anime
│.google (busqueda de wikipedia)
│.traducir idioma ( marca el texto ) 
│.tts texto
│.s
│.simi pregunta
│.twittear (quue esta pasando?)
│.twit (ver twits)
╰────
%readmore
╭─「➿🄹🅄🄴🄶🄾🅂
│.mate_ medium (ganar exp)
│.adiv_ start (ganar exp)
│.tateti
│.tutti
│.luck
│.pozo
│.palabra
│.preguntados
╰────
%readmore
Para ver todos los comandos.
%readmore`
    let header = conn.menu.header || '╭─「 %category 」 '
    let body   = conn.menu.body   || '│ %cmd%islimit'
    let footer = conn.menu.footer || '╰────\n'
    let after  = conn.menu.after  || `
     *Copyright © InsaneService* `
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
   // conn.sendFile(m.chat, 'media/comandos.jpg', '', text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Lo sentimos, el menú tiene un error', m)
    throw e
  }
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['comandos']
handler.tags = ['info']
handler.command = /^(cmd|comandos|commandos|com|hola|list|comando|ayuda)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
