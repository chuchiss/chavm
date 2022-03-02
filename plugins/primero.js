let handler = async (m, {user, conn}) => {
let chencho = global.DATABASE._data.chats[m.chat]
 if (chencho.tutti >= 0) {


//function resolveafte(){
//setTimeout(() =>{

//}, 1000)
//}

function chelo(){
return conn.reply(m.chat,`EL PRIMERO EN DECIR LA PALABRA GANA!
empieza en 20 segundos..`, m)
}


function chelio(){
return conn.reply(m.chat,`
La palabra:   “${picktRandom(global.primero)}” \n
`, m)
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
setTimeout(deslok, 20000)
//}
//asyncCall();
//setTimeout(resolveadd, 2000);

 } else return m.reply('todavia estas en juego.. \n espera unos segundos..')
}
handler.help = ['palabra']
handler.tags = ['game']
handler.command = /^(palabra)$/i

module.exports = handler





function picktRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.primero = [
'gorra','pescado','mandarina','licuado','anonimo','confianza','transiccion','conexion','cohete','jujuy','vivienda','tecnologia','caminata','helicoptero','oso','puerta','quincho','rucula','sopa','tigre','uva','vampiro','washington','politica']
