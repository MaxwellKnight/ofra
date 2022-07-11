import React from 'react'
import '../css/about.css'

const About = () => {
    return (
        <>
            <h1 className='about-title'>אודות</h1>
            <div className='about'>
                <div className='main-about'>
                    <img src={require('../images/portrait.jpeg')} alt="" className='about-image' />
                </div>

                <div className='secondary-about'>
                    <p className='about-text'>
                        עופרה (אנגל) יחיאלי, ילידת 1955 הרצליה
                        מזה שנים רבות מתגוררת בבאר-שבע
                        אמא לשלושה ילדים, סבתא לנכדה
                        בוחרת להשתדל כל יום להיות מאושרת עם בן-זוגה ובחיים בכלל
                        עם העליות והמורדות שבדרך..
                        בעברה חינכה מאות תלמידים בבתי-ספר יסודי. עבודתה נעשתה תוך שליחות
                        ובדרך חוויתית ויצירתית. תמיד ניסתה לגרום לתלמידיה ללמוד מתוך סקרנות,
                        לקחת אחריות למעשיהם ולהאמין בעצמם. (ישנן מספר תלמידות, שכבר
                        אמהות לילדים בעצמן, והיא בקשר איתן עד היום).
                        משנת 2006 עוסקת במודעות דרך גוף-נפש-רוח. מנחה, מדריכה ומלווה
                        באופן פרטני וקבוצתי ומתאימה את עבודתה לקשת רחבה של אוכלוסיות
                        בקהילה, עם קבוצות גיל שונות.
                    </p>

                    <h2>דברים מהלב </h2>

                    <p className='aside-text'>
                        תירגול היוגה, שמלווה אותי מעל עשרים שנה, חושף אותי בכל פעם
                        לכוח המרפא של הנשימה, ועד כמה היא משמעותית בחיי היומיום.
                        תירגול המדיטציה והמיינדפולנס, מלמדים אותי שוב ושוב לקבל וגם
                        לשחרר דפוסים מן העבר, שכבר לא משרתים אותי ולהתחבר אל
                        הרצונות האמיתיים שלי ומהם לצמוח.
                        זו עבודה יומיומית ולא קלה. כמובן שגם אני חוטאת לפעמים, אך הודות
                        לנסיון הרב בתירגול, יודעת לקחת את אותה הנשימה, שמחזירה אותי
                        במהרה אל ההווה ומזכירה לעצמי, שכל מה שמגיע-מבורך,
                        וכל מה שמתעכב-מדוייק.

                    </p>

                    <p className='aside-text'>
                        בין לבין משתדלת לתת מקום לתחביביי השונים כמו -
                        כתיבת ספרים, שירים ומנגינות,
                        ספרונים מעוררי מחשבה, ציור וחריזת תכשיטים.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;