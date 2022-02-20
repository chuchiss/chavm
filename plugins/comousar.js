let handler = async m => m.reply(`
Hola para usar este servicio
tenes que escribir los comandos poniendo un 
puntito y el comando que quieras utilizar

ejemplo " .simi texto "
ejemplo " .simi hola como estas "
ejemplo " .simi que haces? "
 sin las comillas es para usar simsimi

otros ejemplos:

para crear un sticker debes 
seleccionar o subir una imagen
luego escribir " .sticker " sin las comillas

para saber los comandos pone .comandos
para saber todos los comandos pone .menu

y listo fijate todos los comandos
que puedas usar repetidamente
                                        
`.trim()) 
handler.help = ['comousar']
handler.tags = ['info']
handler.command = /^(help|comousar)$/i

module.exports = handler
