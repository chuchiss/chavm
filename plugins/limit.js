let handler = async m => m.reply(`
Los limites son los comandos
cada comando usa 1 limite
para comprar limites 
tienes que tener experiencia 
500 experiencia es 1 limite 
para comprar limites pon .buy 
para conseguir limites juega
a los juegos 
mas info pon .comandos
                                        
`.trim()) 
handler.help = ['limit']
handler.tags = ['info']
handler.command = /^(limit|limits)$/i

module.exports = handler