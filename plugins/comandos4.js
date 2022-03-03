let handler = async (m, {conn}) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
m.reply(`
        ➿ADMIN
_.chau_  (seleccionando o etiquetando)\n
_.kick_ (quitea usuario)\n
_.adv_ (alerta de advertencia a usuario)\n
_.hablen_ (abre grupo)\n
_.callense_ (cerrar grupo)\n
_.grupo_ (cambia de nombre el grupo)\n
_.descripcion_  (cambia descripción del grupo)\n
_.enable_ (activar opciones de grupo)\n
_.disable_ (desactivar opciones de grupo)\n
_.tagall_ (premium)\n
_.sider_ (ausentes en el grupo)\n
_.online_ (quien está online en el grupo)\n
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
