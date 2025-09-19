import { igdl } from "ruhend-scraper"

let handler = async (m, { args, conn }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `*${xdownload} Por favor, ingresa un link de Instagram.*`, m)
  }
  try {
    await m.react('⏳️')
    let res = await igdl(args[0])
    let data = res.data
    for (let media of data) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      await conn.sendFile(m.chat, media.url, 'instagram.mp4', '\`\`\`◜Instagram - Download◞\`\`\`\n\n> Pᴏʀɴʜᴜʙ: 🇵​​​​​🇱​​​​​🇪​​​​​🇧​​​​​🇦​​​​​🇩​​​​​🇦​​​​​\n> Video downloaded successfully')
    }
  } catch {
    await m.react('❌')
    conn.reply(m.chat, '*❌ Ocurrió un error.*')
  }
}

handler.command = ['instagram', 'ig']
handler.tags = ['downloader']
handler.help = ['instagram2', 'ig2', 'igv2']

export default handler
