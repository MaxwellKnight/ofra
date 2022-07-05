import '../css/homePage.css'
import Cloud from "./Cloud"
import { clouds } from '../clouds'
import { data } from '../data'

const backgroundImage = require('../images/background.png')

export default function Homepage() {

    return (
        <main className="main-content" dir="rtl">
            <section className="main-hero">
                <img src={backgroundImage} alt="" className="main-image" />
                <h2 className="main-title">דף הבית</h2>
                <p className="main-text">המיפגשים שלי עם אנשים בקבוצה וגם עם האדם, שאותו אני מלווה באופן פרטני,
                    ממחישים לי כל פעם מחדש את הכוח של נתינה וקבלה בתוך מרחב
                    של תנועה, שיח והקשבה - בו מגלה כל אחד את זכות הבחירה, כדי
                    לשנות דפוסי-התנהגות כלפי המציאות, ואיך ניתן לשחרר את מה שחוסם
                    ולהפוך אותו למשהו חיובי ומשמעותי יותר.
                    לפעמים צריך רק מישהו אחד שיקשיב, שיכיל, שיתמוך וישקף
                    את מה שבאמת קורה, לגלות את האור שבתוכינו ולסמוך.
                    מוצאת את עצמי בהודיה כל פעם מחדש, על כך שזכיתי ביכולת לאפשר
                    לאחר, לראות את האור שנמצא בתוכו ולדעת שיש לי חלק קטן בגילוי הזה,
                    שמוביל לשינוי הרצוי.</p>
            </section>

            <section className="cloud-sentences">
                <h1>משפטים שמלווים אותי לאורך הדרך</h1>
                <p><strong className='cloud-p'>*כדי לקרוא לחצ/י על הענן</strong></p>
                <div className="clouds">
                    {clouds.map(cloud => {
                        return <Cloud key={cloud.id} sentence={cloud.content} id={cloud.id} />
                    })}
                </div>
            </section>
        </main>
    )
}