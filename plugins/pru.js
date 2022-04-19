global.yeca = [
'hola',
'a que se dedica Bad Bunny',
'Cuál es el lugar más frío de la tierra',
'en que año el hombre piso la luna',
'a que se dedica Jackie Chan',
'cuantos minutos tiene una hora',
'cuantos cuartos de kilo hay en un kilo',
'cuantas horas tiene un dia',
'cual es el antonimo de rico',
'como se llama el lugar donde se escriben las notas musicales',
'es lo mismo multiplicar 3x4 que 4x3 - si o no',
'como se llama el triángulo que tiene tres lados iguales',
'que no puede faltar en una oración para que sea completa',
'como se llama quien cuenta la historia de un cuento',
'como se dice en ingles buenas tardes',
'que órgano usamos para respirar',
'como se llama la rayita que ponen encima de la sílaba tónica',
'cuanto es el resultado de 9x9',
'cual es el rio mas largo de Europa',
'a través de que órgano respiran los peces',
'cual es el rio mas largo del mundo',
'por que esta formado el planeta principalmente',
'cual es la capital de Francia',
'de donde se extrae el papel',
'en que continente esta Brasil',
'en que ciudad se encuentra la torre Eiffel',
'quien es el autor de El Quijote',
'cual es el pais mas grande del mundo',
'como se llama el resultado de la multiplicación',
'cual es el animal más rápido del mundo',
'cuantas patas tiene una araña',
'cual es el tercer planeta del sistema solar - en cuanto a distancia del sol',
'que somos los humanos: omnívoros - herbivoros o carnívoros',
'en que año colón descubrió America',
'como se llama la linea imaginaria que divide la tierra por la mitad'
] 
global.logi = [
'funda',
'cantante',
'antartida',
'1969',
'actor',
'60',
'4',
'24',
'pobre',
'pentagrama',
'si',
'equilatero',
'un verbo',
'narrador',
'good afternoon',
'pulmones',
'tilde',
'81',
'rio volga',
'branquias',
'rio amazonas',
'agua',
'paris',
'de la madera',
'america',
'en paris',
'miguel de cervantes',
'rusia',
'producto',
'el guepardo',
'8',
'la tierra',
'omnivoros',
'1492',
'ecuador'
]

global.lll = 0
let lui = 4
let handler = async (m, {conn, usedPrefix}) => {
let veces = global.lll
if (global.lll === 0) {
let Numero = Math.ceil(lui * Math.random())
global.lll += 1
//if (!args || !args[0]) {
//conn.reply(m.chat, `No es así!\n\n*tenes que po `, m)
//return
//}
//let text = args.join` `

//Numero

if (global.lll > lui) { m.reply(`listo`)
}
let veca = global.lll
//global.lll -= global.lll 
//if (args[0] === global.logi[veca]) return conn.reply(m.chat, `Ganaste `, m)

m.reply(`
Pregunta: ¿ estas listo para jugar  ?

Tiempo: 5 minutos
 
Solo minusculas y sin acento
las respuestas tienen que ser exactas



`.trim()) 

setTimeout(()=> {
 if(global.lll > 1) { global.lll -= global.lll}
return 
}, 300000)

//if(typeof global.lll == 'undefined' || 'NaN') {
 // global.lll = 0
 // }
}

else{

let veces = global.lll

//Respuesta : ${global.logi[veces]}
//Respuesta: ${global.logi[veces]}
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




