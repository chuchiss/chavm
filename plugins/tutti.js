let handler = async (m, {user, conn, args, usedPrefix}) => {
let chencho = global.DATABASE._data.chats[m.chat]
 if(chencho.jog <= 1) { return conn.reply(m.chat, `EsperNdo contrincante..`, m)
chencho.jog += 1 }
if (chencho.tutti >= 0 && chencho.jog >= 2) {


//function resolveafte(){
//setTimeout(() =>{

//}, 1000)
//}

function chelo(){
return conn.reply(m.chat,`Listo para jugar al tutti frutti?\nPara leer las instrucciones escribe .it
cuando termines di basta!
empieza en 20 segundos..`, m)
}


function chelio(){
return conn.reply(m.chat,`
Con la letra:   “${picktRandom(global.tuttis)}” \n
Nombre, apellido , cosas , animal , fruta , país o província\n
[GOoooo] `, m)
}


function lok(){
return chencho.tutti -= 1
}
function deslok(){
return chencho.tutti += 1
}

//function resolveadd(){
//global.DATABASE._data.chats[m.chat].tutti == true
//}





//return{

setTimeout(lok, 100)
setTimeout(chelo, 1000)
setTimeout(chelio, 10000)
setTimeout(deslok, 40000)
//}
//asyncCall();
//setTimeout(resolveadd, 2000);

} else return m.reply('todavia estas en juego.. \espera unos segundos..')
}
handler.help = ['tutti']
handler.tags = ['game']
handler.command = /^(tutti)$/i

module.exports = handler





function picktRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.tuttis = [
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
