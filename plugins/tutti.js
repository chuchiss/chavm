let handler = async (m, {user, conn}) => {
 // if (global.DATABASE._data.chats[m.chat].tutti === true) {



function resolveafte(){
setTimeout(() =>{

conn.reply(m.chat,`
Con la letra:   “${picktRandom(global.tuttis)}” \n
Nombre, apellido , cosas , animal , fruta , país o província\n
[GOoooo] `, m)

}, 1000)
}

function chelo(){
m.reply('[bet£]Listo para jugar al tutti frutti?\nPara leer las reglas escribe .reglas
cuando termines di basta!
[empieza en 20 segundos]')
}

// return global.DATABASE._data.chats[m.chat].tutti = false

//function resolveadd(){
//return global.DATABASE._data.chats[m.chat].tutti = true
//}




setTimeout(chelo, 3000)
return{
 resolveafte()
}
//asyncCall();
//setTimeout(resolveadd, 2000);

//  } else return m.reply('todavia estas en juego')
}
handler.help = ['tutti']
handler.tags = ['game']
handler.command = /^(tutti)$/i

module.exports = handler




function picktRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.tuttis = [
'a','b','c','d','e','f','g']
