import { React } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import Guidence from "../componenets/Guidence"
import Gallery from "../componenets/Gallery"
import Books from "../componenets/Books"
import About from "../componenets/About"
import Cloud from "../componenets/Cloud"
import Yoga from "../componenets/Yoga"
import '../css/yoga.css'
import { applyLinearSlide } from "./animations"

/**
	  * printNav is responsible for printing the navigation in relation
	  * to mobile/desktop
	  */
const printNav = (toggleIsMobile, isMobile, toggle, changeIsMobile, data) => {

	return (
		<>
			<FontAwesomeIcon onClick={toggleIsMobile} className="navigation-bar" icon={faBars} />
			<ul className={isMobile ? "nav-list-mobile" : "navigation-list"}>
				{/* Printing */}
				{isMobile ? <FontAwesomeIcon className="close" icon={faWindowClose} onClick={toggleIsMobile} /> : ""}
				<li className={isMobile ? "nav-item-mobile" : "navigation-item"} onClick={() => {
					changeIsMobile()
					return toggle(true)
				}}> דף הבית</li>

				{data.map(item => {
					return (
						<li className={isMobile ? "nav-item-mobile" : "navigation-item"}
							key={item.id}
							onClick={() => {
								changeIsMobile()
								return toggle(false, item.id)
							}}
						>{item.title}</li>
					)
				})}
			</ul>
		</>
	)
}

// ============================================================================================
const printNavItem = (separateComponents, data, toggleIsFormShown) => {

	const printList = list => {
		return (
			<ul className="item-list">
				{list.map((item, index) => <li key={index} className={data.id === 4 ? 'start' : ''} style={applyLinearSlide(index)}>{item}</li>)}
			</ul>
		)
	}

	// input - non
	// output - the desired Item to render on page by ID
	const itemToDisplay = () => {
		switch (data.id) {
			case 0: return <About />
			case 1: return <Yoga />
			case 7: return <Books toggleIsFormShown={toggleIsFormShown} />
			case 4: return <Guidence />
			case 8: return <Gallery />
			default:
		}
	}

	return (
		<>
			{itemToDisplay()}
			{/* This section checks whether the Item to display need special rendering  */}
			{
				(!separateComponents.includes(data.id)) ?
					<>
						<h1 className="item-title">{data.title}</h1>
						{data.id === 3 && <p className="unique" style={{ color: 'brown', textDecoration: 'none', cursor: 'auto', fontSize: '.9rem', marginBotoom: '2rem' }}>כשמזג האוויר מאפשר יוצאים אל הטבע.</p>}
					</> : ""
			}
			{data.id === 5 &&
				<p style={{ color: '#007000', fontWeight: 'bold' }}>
					אם את/ה הגעת לדף זה, יש מצב שהגיע הזמן שלך לדייק את עצמך בחיים,<br />
					או להמליץ לאדם יקר לעשות את הצעד הבא שלו.
				</p>
			}
			{(!separateComponents.includes(data.id)) && data.id !== 4 ? <p id="main-text" className="item-main-text">{data.mainText}</p> : ""}
			{data.id === 3 ? data.subText.map((line, index) => <p className={index === 4 ? 'generic-p' : 'generic-paragraph'}>{line}</p>) : ''}
			{data.hasOwnProperty('list') ? printList(data.list) : ""}
			{data.id === 3 &&
				<p className="outdoor-activity">
					<span className="first">נעים בתנועה רכה</span>  -  מתחברים לעצמנו ולסביבה דרך יוגה מתונה, נשימה, מדיטציית מיינדפולנס.<br />
					<br />
					<span className="second">מילים-מילים מהראש ומהלב</span> -  מוצאים את הכוח שיש במילים, ובכתיבה אינטואיטיבית צועדים לכיוון הריפוי, הצמיחה והשיחרור.<br />
					<br />
					<span className="third">צלילים מרפאים</span> -  מקשיבים לסביבה ומשלבים מדיטציית צלילים מרפאים עם קערות טיבטיות.<br />
				</p>
			}
			{data.id === 3 && <p className="unique" style={{ color: 'black', textDecoration: 'none', cursor: 'auto', fontSize: '1rem', marginTop: '2rem' }}>לא נדרש ניסיון קודם מגיעים בלב פתוח ואוהב.</p>}
			{data.id === 3 &&
				<p className="yoga-down-desc">
					** זמנים ומיקום יימסרו בהרשמה מראש **
					<br />
					<br />
					** ניתן להזמין  מיפגש חד-פעמי לרגל ציון ארוע של חברים, משפחה, מקומות עבודה וכו' **
				</p>
			}
		</>
	)
}
// ============================================================================================
const printBooks = (books, category, handleCurrentBook) => {
	const newBooks = books.map((book) => book.category === category ? book : '').filter(e => e)
	return (
		newBooks.map((book) => {
			return (
				<div className='book' key={book.id}>
					<img className='book-image'
						src={book.coverImage}
						alt="cover of the book"
						style={applyLinearSlide(book.id)}
						onClick={() => handleCurrentBook(book.id)} />
				</div>
			)
		})
	)
}


// ============================================================================================
const printClouds = clouds => {
	return (
		<>
			{clouds.map(cloud => {
				return (
					<Cloud
						key={cloud.id}
						header={cloud.header}
						sentence={cloud.content}
						contentList={cloud.contentList}
						cred={cloud.cred}
						id={cloud.id}
					/>
				)
			})}
		</>
	)
}


// ============================================================================================
const printGallery = (images, handleCurrentImage) => {
	return (
		<>
			{images.map((image, index) => {
				return (
					<img key={image.id}
						src={image.path}
						className={`gallery-item img${index + 1}`}
						style={applyLinearSlide(index * 0.5)}
						alt='moments from session and activities'
						onClick={() => handleCurrentImage(image.id)}
					/>
				)
			})}
		</>
	)
}


export { printNav, printNavItem, printBooks, printClouds, printGallery }