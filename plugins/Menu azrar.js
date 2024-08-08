function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  const harley = 'https://telegra.ph/file/67f3f307bb5e0fb199dc1.jpg'
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `*• ──╾⊱﹝🔮﹞⊰╼── •*
*مــرحــبــا بــك/ي* ${taguser}
╗──────¤مــعلـ🛖ـومــاتــك
> •▫️مــســتــواك : ${level}
> •▫️بــريــمــيــوم : ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''}
> •▫️رتــبــتــك : ${role}
*• ──╾⊱﹝🔮﹞⊰╼── •*
╗───¤مــعلــومــات الــ🤖بــوت
> إســم الــبــوت: زيتا
> الــمــطــورين :\n🍁♟𝒜𝒷𝒹𝓊𝓁𝓇𝒶𝒽𝓂𝒶𝓃\n>𝐹𝐿𝐸𝒳♟🍁\n>𝒜𝐻𝑀𝐸𝒟♟🍁
> مــدة الــتــشــغــيل : ${uptime}
*• ──╾⊱﹝🔮﹞⊰╼── •*
> Copyright © 2024 𝓩𝓔𝓣𝓐`,subtitle: "HARLEY",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: harley } }, { upload: conn.waUploadToServer }, {quoted: m}))},nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام زيتا بـ🤖ـوت',
                                            highlight_label: '🧿اختار وبعبص براحتك يا قلب اخوك',
                                            rows: [
                                                {
                                                    header: 'الــقـ👑ـســم الـاول',
                                                    title: 'استدعاء_قسم_الاعضاء #الاعضاء',
                                                    description: '',
                                                    id: '.م1'
                                                },
                                                {
                                                    header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',
                                                    title: 'استدعاء_قسم_المشرفين #المشرفين',
                                                    description: '',
                                                    id: '.م11'
                                                },
                                                {
                                                    header: 'الــقـ🕋ـســم الــثــالــث',
                                                    title: 'استدعاء_قسم_الدين #الدين',
                                                    description: '',
                                                    id: 'قائمة2'
                                                },
                                                {
                                                    header: 'الــقـ👑ـســم الــرابــع',
                                                    title: 'استدعاء_قسم_المطور #المطور',
                                                    description: '',
                                                    id: '.م3'
                                                },
                                                {
                                                    header: 'الــقـ🛡ـســم الــخــامــس',
                                                    title: 'استدعاء_قسم_التنزيلات #التنزيلات',
                                                    description: '',
                                                    id: '.م4'
                                                },
                                                {
                                                    header: 'الــقـ🕹ـســم الــســادس',
                                                    title: 'استدعاء_قسم_الالعاب #الالعاب',
                                                    description: '',
                                                    id: '.م5'
                                                },
                                                {
                                                    header: 'الــقـ🌀ـســم الــســابــع',
                                                    title: 'استدعاء_قسم_التحويلات #التحويلات',
                                                    description: '',
                                                    id: '.م6'
                                                },
                                                {
                                                    header: 'الــقـ🎧ـســم الــثــامـن',
                                                    title: 'استدعاء_قسم_الصوتيات #الصوتيات',
                                                    description: '',
                                                    id: 'صوت'
                                                },
                                                {
                                                    header: 'الــقـ🤖ـســم الــتــاســع',
                                                    title: 'استدعاء_قسم_الذكاء #الذكاء',
                                                    description: '',
                                                    id: 'ذكاء'
                                                },
                                                {
                                                    header: 'الــقـ🚨ـســم الــعــاشــر',
                                                    title: 'استدعاء_قسم_الدعم #الدعم',
                                                    description: '',
                                                    id: 'دعم'
                                                },
                                                {
                                                    header: 'الــقـ🔍ـســم الــحــاديــة عــشــر',
                                                    title: 'استدعاء_قسم_ابحث #البحث',
                                                    description: '',
                                                    id: '.م12'
                                                },
                                                {
                                                    header: 'الــقـ📽️ـســم الــثــانــي عــشــر',
                                                    title: 'استدعاء_قسم_الافلام #الافلام',
                                                    description: '',
                                                    id: '.م13'
                                                },
                                                {
                                                   
                                                    header: 'الــقـ👨🏻‍💻ـســم الــثــانــي عــشــر',
                                                    title: 'قسم السرقه',
                                                    description: '',
                                                    id: 'سكربت'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـورين╎📲⌋","url":"https://whatsapp.com/channel/0029VagAnKTB4hdbFcQee90X"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['menu', 'مهام', 'اوامر','الاوامر']

export default handler;
