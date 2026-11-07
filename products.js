/*
  רשימת המאפים של מי-מה מתוקים
  ================================

  כל שורה היא מאפה אחד. אפשר לשנות כאן מחיר, שם, תמונה או סוג.

  name  - שם המאפה, כמו שיופיע באתר
  cat   - הסוג: 'עוגיות' / 'עוגות' / 'מאפים' / 'קינוחים'
  price - המחיר בשקלים, רק המספר. למשל: price: 45
          כל עוד כתוב '' (ריק) - יופיע "[מחיר] ₪"
  unit  - בשביל מה המחיר. למשל: 'למגש של 12' או 'ליחידה' או 'לעוגה שלמה'
  img   - שם קובץ התמונה מתוך התיקייה images. ריק = מסגרת בלי תמונה

  9 המאפים הראשונים ברשימה מופיעים באתר לפני שלוחצים "לכל המאפים".
  כדי להוסיף מאפה: מעתיקים שורה, משנים את הפרטים, ושמים את התמונה בתיקייה images.
*/

window.PRODUCTS = [
  { name: "עוגיות שוקולד צ'יפס",  cat: 'עוגיות',  price: '', unit: '', img: 'choc-chip-cookies.jpg' },
  { name: 'עוגיות שיבולת שועל',  cat: 'עוגיות',  price: '', unit: '', img: 'oat-cookies.jpg' },
  { name: 'מגולגלות שוקולד',     cat: 'מאפים',   price: '', unit: '', img: 'chocolate-rolls.jpg' },
  { name: 'עוגיות הר געש',       cat: 'עוגיות',  price: '', unit: '', img: 'volcano-cookies.jpg' },
  { name: 'פאי לימון',           cat: 'עוגות',   price: '', unit: '', img: 'lemon-pie.jpg' },
  { name: 'טרמיסו',              cat: 'קינוחים', price: '', unit: '', img: 'tiramisu.jpg' },
  { name: 'סינבון',              cat: 'מאפים',   price: '', unit: '', img: 'cinnabon.jpg' },
  { name: 'שוקולד דובאי',        cat: 'קינוחים', price: '', unit: '', img: 'dubai-chocolate.jpg' },
  { name: 'עוגת שוקולד',         cat: 'עוגות',   price: '', unit: '', img: 'chocolate-cake.jpg' },
  { name: 'עוגת קרם ברולה',      cat: 'עוגות',   price: '', unit: '', img: 'creme-brulee-cake.jpg' },
  { name: 'עוגת גבינה',          cat: 'עוגות',   price: '', unit: '', img: 'cheesecake.jpg' },
  { name: 'בראוניז',             cat: 'עוגות',   price: '', unit: '', img: 'brownies.jpg' },
  { name: 'קאפקייקס',            cat: 'עוגות',   price: '', unit: '', img: 'cupcakes.jpg' },
  { name: 'עוגיות רד וולווט',    cat: 'עוגיות',  price: '', unit: '', img: 'red-velvet-cookies.jpg' },
  { name: 'עוגיות גרנולה',       cat: 'עוגיות',  price: '', unit: '', img: 'granola-cookies.jpg' },
  { name: 'אלפחורס',             cat: 'עוגיות',  price: '', unit: '', img: 'alfajores.jpg' },
  { name: 'חלות',                cat: 'מאפים',   price: '', unit: '', img: 'challah.jpg' },
  { name: 'כדורי שוקולד',        cat: 'קינוחים', price: '', unit: '', img: 'chocolate-balls.jpg' },
  { name: 'קינוחי כוסות',        cat: 'קינוחים', price: '', unit: '', img: 'dessert-cups.jpg' },
  { name: 'פאנקייקים וקרפים',    cat: 'קינוחים', price: '', unit: '', img: 'pancakes-crepes.jpg' },
  { name: 'עוגיות אמסטרדם',      cat: 'עוגיות',  price: '', unit: '', img: '' }
];

/* מספר הוואטסאפ שאליו נשלחות ההזמנות (בלי 0 בהתחלה, עם 972) */
window.WHATSAPP_NUMBER = '972546235236';
