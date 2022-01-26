let handler = async (m, {conn}) => {
m.reply('eee')
await sleep(1000) return m.reply('jdjdjd')
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

}
handler.help = ['prueba']
handler.tags = ['']
handler.command = /^(prueba)$/i

module.exports = handler
