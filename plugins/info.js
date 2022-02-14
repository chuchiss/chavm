let handler = async m => m.reply(`
Para saber como usar escribe .comousar
o también puedes escribir .help

para saber los comandos escribe .comandos

@insanebot.oficial 
Entérate todos los números ONLINE en:
instagram.com/insanebot.oficial
                                        
`.trim()) 
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler
