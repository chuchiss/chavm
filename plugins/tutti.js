let handler = async (m, {user, conn}) => {
  if (global.DATABASE._data.chats[m.chat].tutti == true) {

async function asyncCall(){
functions resolveafte(){
return new promise(resolve => {
setTimeout(() =>{

conn.reply(m.chat,`
Con la letra:   “${picktRandom(global.tuttis)}” \n
Nombre, apellido , cosas , animal , fruta , país o província\n
[GOoooo] `, m)

}, 8000);
});
}
m.reply('[bet£]Listo para jugar al tutti frutti?\nPara leer las reglas escribe .reglas
cuando termines di basta!
[empieza en 20 segundos]')

functions resolveadd(){
return new promise(resolve => {
setTimeout(() =>{

global.DATABASE._data.chats[m.chat].tutti = true

}, 20000);
});
}


global.DATABASE._data.chats[m.chat].tutti = false

//async function asyncCall(){
await resolveafte()
await resolveadd()
//m.reply(result);
//m.reply(resulta);
//}
}
asyncCall()


  } else return m.reply('todavia estas en juego')
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
