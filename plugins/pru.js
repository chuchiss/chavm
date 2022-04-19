global.yeca = [
'hola',
'a que se dedica Bad Bunny',
'cuantos años tiene mirta legrand',
'Cuál es el lugar más frío de la tierra',
'en que año el hombre piso la luna',
'a que se dedica Jackie Chan',
'cuantos minutos tiene una hora',
'cuantos cuartos de kilo hay en un kilo',
'cuantas horas tiene un dia'
'cual es el antonimo de rico'
'como se llama el lugar donde se escriben las notas musicales'
'es lo mismo multiplicar 3x4 que 4x3 - si o no'
'como se llama el triángulo que tiene tres lados iguales'
'que no puede faltar en una oración para que sea completa'
'como se llama quien cuenta la historia de un cuento',
'como se dice en ingles buenas tardes'
'que órgano usamos para respirar'
'como se llama la rayita que ponen encima de la sílaba tónica'
'cuanto es el resultado de 9x9'
] 
global.logi = [
'funda',
'cantante',
'muchos',
'la antartida',
'1969',
'actor'
'60'
'4'
'24'
'pobre'
'pentagrama'
'si'
'equilatero'
'un verbo'
'narrador'
'good afternoon'
'pulmones'
'tilde'
'81'
]

global.lll = 0

let handler = async (m, {conn, usedPrefix}) => {
let veces = global.lll
if (global.lll === 0) {
let Numero = Math.ceil(5 * Math.random())
//if (!args || !args[0]) {
//conn.reply(m.chat, `No es así!\n\n*tenes que po `, m)
//return
//}
//let text = args.join` `
global.lll += Numero


let veca = global.lll
//global.lll -= global.lll 
//if (args[0] === global.logi[veca]) return conn.reply(m.chat, `Ganaste `, m)

m.reply(`
Pregunta: ¿ ${global.yeca[Numero]}   ?

Tiempo: 5 minutos
 


`.trim()) 

//setTimeout(()=> {
// if(global.lll > 1) { global.lll -= global.lll}
//return 
//}, 3000)

//if(typeof global.lll == 'undefined' || 'NaN') {
 // global.lll = 0
 // }
}

else{

let veces = global.lll

//Respuesta : ${global.logi[veces]}
//Respuesta: ${global.logi[Numero]}
  m.reply(`

*pregunta:* ¿ ${global.yeca[veces]} ?

_Solo minusculas_

_para_ _contestar_ 
_escribe la respuesta_
_si es correcto Ganarás!_

`.trim()) 


}

}
handler.help = ['']
handler.tags = ['']
handler.command = /^(pre(guntados)?)$/i

module.exports = handler




