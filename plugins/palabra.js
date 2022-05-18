let handler = async (m, { conn, user }) => {
let lui = 35
global.luchi += 1
let lupun = (global.luchi + 1)
if (global.luchi > 1) {
conn.reply(m.chat, `La palabra es *${global.reee[global.reeu]}* 

Jugadores en linea ${lupun}

Las palabras tienen que ser exactas
si es correcto Ganarás!`, m)
return
}
let Numero = Math.ceil(lui * Math.random())
 conn.reply(m.chat, `Di la palabra a continuación..

La palabra es *${global.reee[Numero]}* `, m)
global.reeu += Numero

}
handler.help = ['palabra']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pal(abra)?)$/i
module.exports = handler
handler.owner = false

global.reee = [ 'himNo','shampoo','pergamino','sArten', 'Equilatero','trapiTO','poLIcia','Cuartel','CaTeter','TRAMPOLIN','carTeRa','kilo','gorra','refriGeraDor',
'quintA','correcaminos',
'cUarTel','columNa',
'cArpintEro','comida','coctEl',
'coraZoN','CANTANTE','CUCARACHA','COCODRILO','ALFAJOR','GOMERA','POLICIA','CARRITO','JAMON','cuna4422334221',
'comaDreJA','JarDIn','GORRO','CAMISA','chaLECo','foca673992928'

]

global.reeu = 0
global.luchi = 0
