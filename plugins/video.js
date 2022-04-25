let handler = async m => m.reply(`
para descargar un video es .play2 nombre de video
                                        
`.trim()) 
handler.help = ['']
handler.tags = []
handler.command = /^(video)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
