let handler = async m => m.reply(`
DONA PARA QUE SE SIGA SOSTENIENDO INSANEBOT
TIENE MUCHOS GASTOS DE MANTENIMIENTO+
DONA LO QUE QUIERAS, ADEMAS EL BOT ES GRATIS 
Y SIN PUBLICIDAD!

CVU - 0000003100088735284966
Alias - creo.sofa.rito.mp

QUERES COMPRAR EL BOT PARA QUE SEA SOLO TUYO?
envia un correo a insanebot.oficial@gmail.com
                                        
`.trim()) 
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(donar|donaciones)$/i

module.exports = handler
