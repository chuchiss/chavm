let handler = async m => m.reply(`
DONA PARA QUE SE SIGA SOSTENIENDO InsaneService
TIENE MUCHOS GASTOS DE MANTENIMIENTO+
DONA LO QUE QUIERAS, ADEMAS ESTE SERVICIO ES GRATIS 
Y SIN PUBLICIDAD!

CVU - 0000003100088735284966
Alias - creo.sofa.rito.mp

                                        
`.trim()) 
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(donar|donaciones)$/i

module.exports = handler
