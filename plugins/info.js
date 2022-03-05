let handler = async m => m.reply(`
*Para saber como usar escribe .comousar
o también puedes escribir .help

para saber los comandos escribe .comandos

@servicioinsane
Entérate todos los números ONLINE en:
instagram.com/servicioinsane
                                        
`.trim()) 
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler
