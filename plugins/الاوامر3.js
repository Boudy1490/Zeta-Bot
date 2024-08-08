let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  let message = `*⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
> Zeta↳🐢↲𝐁𝐎𝐓
> 〔القـسـم ذكاء┊ ˼‏ ˹ 〕↶
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*زيتا بوت*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
> 🤖 .بوت
> 🤖 .مادارا
> 🤖 .نسخ
> 🤖 .تحسين
> 🤖 .ستاكت
> 🤖 .انطق
> 🤖 .ترجم
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊Zeta ス A.A.B┊⚜️⌝*
*⌬*`;


  conn.sendFile(m.chat, 'https://telegra.ph/file/67f3f307bb5e0fb199dc1.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(ذكاء)$/i;
handler.command = new RegExp;

export default handler;
