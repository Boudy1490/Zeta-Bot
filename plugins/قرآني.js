import axios from 'axios';
import { generateWAMessageFromContent, prepareWAMessageMedia } from '@whiskeysockets/baileys';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    let kurosakiApi = 'https://api-kurosaki-dev0.osc-fr1.scalingo.io/api/islam/quranvid';
    let response = await axios.get(kurosakiApi, { responseType: 'arraybuffer' });
    if (response.status !== 200) throw new Error(`Error ${response.status}: ${response.statusText}`);

    let buffer = Buffer.from(response.data, 'binary');

    var mediaMessage = await prepareWAMessageMedia({ video: buffer }, { upload: conn.waUploadToServer });
    
    const interactiveMessage = {
      body: { text: '© SENKU ISHIGAMI ❤️😁' },
      footer: { text: 'اضغط على الزر للحصول على فيديو آخر' },
      header: {
        title: 'فيديو قرآني',
        hasMediaAttachment: true,
        videoMessage: mediaMessage.videoMessage,
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              title: 'فيديو آخر',
              id: `${usedPrefix}${command}`
            }),
            messageParamsJson: ''
          }
        ]
      }
    };

    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage,
        },
      },
    }, { userJid: conn.user.jid, quoted: m });

    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
  } catch (error) {
    console.error('Error fetching video:', error);
    await conn.sendMessage(m.chat, { text: `حدث خطأ أثناء جلب الفيديو: ${error.message}` });
  }
};

handler.command = ['quran'];
handler.help = ['help-video'];
handler.tags = ['قرآني'];
export default handler;