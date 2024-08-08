let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  let message = `*⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
*مرحبا بك يا ${taguser}*
*الى قائمه الاساسيه*
*بعض قوانين لتجنب الحظر من مطورين*
*_1 ممنوع سب اصحاب البوت والا سيتم تبنيدك*
*_2 *ممنوع البحث عن السك*
*_3 ممنوع الدخول للبوت في خاص
⎔⋅• ━ ╼╃ ⌬〔قائ〕⌬ ╄╾ ━ •⋅⎔`;


  conn.sendFile(m.chat, 'https://telegra.ph/file/67f3f307bb5e0fb199dc1.jpg', 'image.jpg', message, m);
};

handler.command = /^(منيو)$/i

export default handler;
