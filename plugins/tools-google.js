import { googleIt } from '@bochilteam/scraper'

let handler = async (m, { conn, command, args }) => {
    const fetch = (await import('node-fetch')).default
    let full = /f$/i.test(command)
    let text = args.join` https://whatsapp.com/channel/0029VagAnKTB4hdbFcQee90X`
    
    if (!text) return conn.reply(m.chat, '✳️ ما الذي ترغب في البحث عنه في جوجل؟', m)
    
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    
    let msg = search.articles.map(({ title, url, description }) => {
        return `*${title}*\n_${url}_\n_${description}_\n\n*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*`
    }).join('\n\n')
    
    try {
        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        
        await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    } catch (e) {
        m.reply(msg)
    }
}

handler.help = ['google']
handler.tags = ['tools']
handler.command = ['google','جوجل','غوغل'] 

export default handler
