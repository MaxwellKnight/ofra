import { React } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import Guidence from "../componenets/Guidence"
import Gallery from "../componenets/Gallery"
import Books from "../componenets/Books"
import About from "../componenets/About"
import Concepts from "../componenets/Concepts"
import Cloud from "../componenets/Cloud"
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
const printNavItem = (separateComponents, data) => {

    const printList = list => {
        return (
            <ul className="item-list">
                {list.map((item, index) => <li key={index} style={applyLinearSlide(index)}>{item}</li>)}
            </ul>
        )
    }

    // input - non
    // output - the desired Item to render on page by ID
    const itemToDisplay = () => {
        switch (data.id) {
            case 0: return <About />
            case 1: return <Books />
            case 2: return <Concepts />
            case 3: return <Guidence />
            case 8: return <Gallery />
            default:
        }
    }

    return (
        <>
            {/* This section checks whether the Item to display need special rendering  */}
            {
                (!separateComponents.includes(data.id)) ?
                    <>
                        <h1 className="item-title">{data.title}</h1>
                        <p className="participant">מס משתתפים מוגבל - בתיאום מראש.</p>
                    </> : ""
            }
            {(!separateComponents.includes(data.id)) ? <p id="main-text" className="item-main-text">{data.mainText}</p> : ""}
            {data.hasOwnProperty('list') ? printList(data.list) : ""}
            {itemToDisplay()}
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
                    <h4 className='book-title'>{book.title}</h4>
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