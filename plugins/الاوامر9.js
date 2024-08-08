let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  let message = `*⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
> 𝐙𝐄𝐓𝐀↳🍁↲𝐁𝐎𝐓
> 〔القـسـم دعم┊ ˼‏ ˹ 〕↶
*⌬∙ • ──╾⊱﹝🍁﹞⊰╼── • ∙⌬*
*زيتا بوت*
*⌬∙ • ──╾⊱﹝🍁﹞⊰╼── • ∙⌬*
> 🚨 .ابلاغ
> 🚨 .دعم
> 🚨 .المطور
*⌬∙ • ──╾⊱﹝🍁﹞⊰╼── • ∙⌬*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞🍁┊Zeta ス A.A.B┊🍁⌝*
*⌬*`;


  conn.sendFile(m.chat, 'https://telegra.ph/file/67f3f307bb5e0fb199dc1.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(دعم)$/i;
handler.command = new RegExp;

export default handler;
