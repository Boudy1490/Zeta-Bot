let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 

 if (/^احا$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `احتين علي احتك 🐦🥹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 } 
    if (/^لا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `تلوقك🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  } 
   
   if (/^منور$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `بنورك💕`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  }  

if (/^نانو$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `نعم يا حب💕`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  }

   if (/^عبيط|يعبيط|اهبل |غبي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `شبهك`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  }

if (/^كسمك$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `ابوك نط على امك ❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
}

   if (/^بوت$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `عيون البوت ❤️❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }

     if (/^اه$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `الشارع الي وراه `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }

     if (/^نسوان/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `استغفر الله انا محترم 🥺`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      }
    if (/^الاء/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `العبيطة حج زياد دي ونن عينو م جوا🥺😂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      }
    if (/^بيض|بيضان|بيضاني$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `مسلوق ولا محمر 😂😂 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
    } 

    if (/^بتعمل اي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `انت مالك يحكاك 🐦😂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

       if (/^اهلا/i.test(m.text) ) { //sem prefixo 
       conn.reply(m.chat, `قول السلام عليكم احسن`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

    }
 if (/^يب$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` قول طيب يحب 🫶🏻`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
      if (/^تيب|طيب$/i.test(m.text) ) { //sem prefixo 
       conn.reply(m.chat, ` فرح امك قريب🫶🏻`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

       } 

   if (/^بموت فيك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'وانا كمان، متيجي نتجوز🥺',m) //wm, null, [['Menu', '#menu']], m) botones :v

   }

   if (/^اقلع$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'قلعت وانت لف واقلع ',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^متيجي ازنقك$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `مستنيك عند امك`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 


   }
 if (/^هرميك من الشباك$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `خلاص خلاص مترمنيش 🥺💔`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` ماشي 🥲 `, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 

 if (/^في اي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `فيه محشي وبانيه تاخد`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 

 if (/^تست$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `تست تست ااالللوووو، هل تسمعني ححوولل`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

 if (/^بتعمل اي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` بعمل محشي تحب تاكل ولا تحشي`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` نورت البيت 😂❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^اخرس$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `اخرس انت صدعتنا 😂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 


 if (/^ملل|مللل|ملللل|انازهقت$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `عارفين ف اسكت احسن لك`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^السلام ورحمة الله وبركاته$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `وعليكم السلام ورحمة الله وبركاته `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^هات طبق$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` روح جيب لنفسك 🥲❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `انت بوت عشان ترسل الاموجي ده  🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `🐦🐦🐦🐦🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

  if (/^اي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `عايز اي`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
   if (/^الو$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `اشغلو`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

    } 
   if (/^مين$/i.test(m.text) ) { //sem prefixo 
   conn.reply(m.chat, `الملمين`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

   } 
   if (/^احي$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `في اي اي الي حصل`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

    } 
   if (/^الفيوم$/i.test(m.text) ) { //sem prefixo 
   conn.reply(m.chat, `نكتك ف حصه العلوم`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

   } 
   if (/^هموت$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `فيا 🌚`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

    } 
   if (/^جامد$/i.test(m.text) ) { //sem prefixo 
   conn.reply(m.chat, `انا اجمد`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

   } 
   if (/^يصطا|يسطا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `خدتك ع البسطه، انت هتصاحبني ياعم`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

    } 

  if (/^نعم$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `حد ناداك 🌚🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

    } 


 if (/^كيفك|شخبارك|علوك|عامل ايه|عامل اي$/i.test(m.text) ) { //sem prefixo 
conn.reply(m.chat, ` الحمد لله وانت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

if (/^انت عيل بضان|بضان|بيض $/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `مسلوق ولا محمر 😂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
    }
   
 return !0 } 
 export default handler