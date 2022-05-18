let handler = async m => m.reply(`
•Hola para usar este servicio
tienes que escribir los comando poniendo un 
puntito ante cada palabra
ejemplo .simi hola 
•para saber los comandos pone .comandos
•para saber todos los comandos pone .menu

✓y listo fijate todos los comandos
que puedas usar, repetidamente✓
                                        
`.trim()) 
handler.help = ['comousar']
handler.tags = ['info']
handler.command = /^(help|comousar)$/i

module.exports = handler
