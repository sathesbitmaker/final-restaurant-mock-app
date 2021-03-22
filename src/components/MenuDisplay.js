import React from 'react'
import menuImage1 from "../images/menuDisplay1.jpeg"
import menuImage2 from "../images/menuDisplay2.jpeg"
import menuImage3 from "../images/menuDisplay3.jpeg"
import menuImage4 from "../images/menuDisplay4.jpeg"
import menuImage5 from "../images/menuDisplay5.jpeg"
import '../CSS/MenuDisplay.css'

function MenuDisplay(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
        className={`wholeMenu ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
            <div className="menuFirst">
                <img className="menuImages" id="one" src={menuImage1}/>
                <img className="menuImages" id="two" src={menuImage2}/>
                <img className="menuImages" id="three" src={menuImage3}/>
            </div>
            <div 
            className={`menuSecond ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
                <h1 className="menuTitles" 
                id="firstTitle"> DINNER <br/> MENU</h1>
                <h1 className="menuTitles"> DRINKS  <br/> MENU</h1>
                <h1 className="menuTitles"> DESSERT <br/> MENU</h1>
            </div>
        </div>
    )
}

export default MenuDisplay;