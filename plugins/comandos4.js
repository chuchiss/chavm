let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(`
        ➿ADMIN
_.chau_  (seleccionando o etiquetando)
_.kick_ (quitea usuario)
_.hablen_ (abre grupo)
_.callense_ (cerrar grupo)
_.grupo_ (cambia de nombre el grupo)
_.descripcion_  (cambia descripción del grupo)
_.enable_ (activar opciones de grupo)
_.disable_ (desactivar opciones de grupo)
_.tagall_ (premium)
_.sider_ (ausentes en el grupo)
_.online_ (quien está online en el grupo)


*___________________________________*
         ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇ
                                        
`.trim()) 
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else return
}
handler.help = ['admin']
handler.admin = true
handler.tags = ['info']
handler.command = /^(admin|adm)$/i

module.exports = handler
