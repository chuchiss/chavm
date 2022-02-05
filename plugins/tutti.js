let handler = async (m, {user, conn}) => {
 //if (global.DATABASE._data.chats[m.chat].tutti == true) {



//function resolveafte(){
//setTimeout(() =>{

//}, 1000)
//}


function chelio(){
 conn.reply(m.chat,`
Con la letra:   “${picktRandom(global.tuttis)}” \n
Nombre, apellido , cosas , animal , fruta , país o província\n
[GOoooo] `, m)
}


function lok(){
return global.DATABASE._data.chats[m.chat].tutti = false
}
function deslok(){
return global.DATABASE._data.chats[m.chat].tutti = true
}

//function resolveadd(){
//return global.DATABASE._data.chats[m.chat].tutti = true
//}





//return{
//setTimeout(lok, 500)
//setTimeout(chelo, 1000)
setTimeout(chelio, 10000)
//setTimeout(deslok, 15000)
//}
//asyncCall();
//setTimeout(resolveadd, 2000);

// } else return m.reply('todavia estas en juego')
}
handler.help = ['tutti']
handler.tags = ['game']
handler.command = /^(tutti)$/i

module.exports = handler



function chelo(){
conn.reply(m.chat,`Listo para jugar al tutti frutti?\nPara leer las reglas escribe .reglas
cuando termines di basta!
empieza en 20 segundos..`, m)
}

function picktRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.tuttis = [
'a','b','c','d','e','f','g']
