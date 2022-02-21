let handler = async m => m.reply(`
segui a @servicioinsane en ig
www.instagram.com/servicioinsane
                                        
`.trim()) 
handler.help = ['creditos']
handler.tags = ['info']
handler.command = /^(creditos|créditos|creador|crédito|credito)$/i

module.exports = handler
