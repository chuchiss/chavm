let handler = async (m, { conn, user }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastmp > 9500) {
function mmero() {
  let costo = 5000
  let veces = global.pozo
  if(typeof global.pozo == 'undefined') {
  global.pozo = 0
  }
  let lukia = (costo * veces)
  conn.reply(m.chat, `*∆ Pozo acumulado ∆*\n \n📍costo del pozo ${costo} xp\n📍valor del pozo ${lukia} xp \n📍total de intentos ${veces} \n \n *Cargando...*`, m)
}
setTimeout(mmero, 3000)

global.DATABASE._data.users[m.sender].lastmp = new Date * 1
  } else return
}
handler.help = ['pozo']
handler.tags = ['game']
handler.limits = true
handler.group = true
handler.command = /^(pozo)$/i
module.exports = handler


global.funzi = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86''87','88','89','90','91','92]
