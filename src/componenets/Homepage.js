import '../css/homePage.css'
import '../fonts/miri/miriwin-webfont.ttf';
import '../fonts/anka/ankaclm-bold-webfont.ttf';
import { printClouds } from '../utils/print'
const { clouds } = require('../data/clouds.js')
const backgroundImage = require('../images/main-background.jpeg')

const Homepage = () => {

	return (
		<main className="main-content" dir="rtl">
			<section className="main-hero">
				<img src={backgroundImage} alt="" className="main-image" />
				<h1 className="yoga-way-title">איזון גוף-נפש-רוח </h1>
				<p className="yoga-way-sub">הדרכה וליווי בתהליכי התפתחות</p>
				<p className="yoga-way-sub">בהיבט רגשי-חברתי</p>
				<h2 className="yoga-way-title-main">פרטני וקבוצתי</h2>
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

			<section id='cloud-section' className="cloud-sentences">
				<h1>משפטים שמלווים אותי לאורך הדרך</h1>
				<p><strong className='cloud-p'>*כדי לקרוא לחצ/י על הענן</strong></p>
				<div className='clouds-only-container'>
					<div className="clouds"> {/* Printing all the clouds with quotes */}
						{printClouds(clouds)}
					</div>
				</div>
			</section>
		</main>
	)
}

export default Homepage;