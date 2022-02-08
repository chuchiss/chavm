let handler = async m => m.reply(`
segui a @insanebot.oficial en ig
www.instagram.com/insanebot.oficial
                                        
`.trim()) 
handler.help = ['creditos']
handler.tags = ['info']
handler.command = /^(creditos|créditos|creador|crédito|credito)$/i

module.exports = handler
