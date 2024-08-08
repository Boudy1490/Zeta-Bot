let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
> Zeta↳🐢↲𝐁𝐎𝐓
> 〔القـسـم الاسـلامـي┊ ˼‏ 🕋˹ 〕↶
    *⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
    > 〔قـسـم الاعـضـاء┊ ˼‏ 🐢˹ 〕
    *⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
    > 🎧 .عميق
> 🎧 .منفوخ
> 🎧 .تخين
> 🎧 .صاخب
> 🎧 .سريع
> 🎧 .تخينن
> 🎧 .رفيع
> 🎧 .روبوت
> 🎧 .بطيء
> 🎧 .ناعم
> 🎧 .سنجاب
    *⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*`


    conn.sendFile(m.chat, 'https://telegra.ph/file/67f3f307bb5e0fb199dc1.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(صوت)$/i;
handler.command = new RegExp;

export default handler;
