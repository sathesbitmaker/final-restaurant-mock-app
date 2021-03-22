import React from 'react'
import beerImage1 from "../images/beerImage1.jpg"
import beerImage2 from "../images/beerImage2.jpg"
import beerImage3 from "../images/beerImage3.jpg"
import beerImage4 from "../images/beerImage4.jpg"
import '../CSS/BeerDisplay.css'

function BeerDisplay(props) {
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
        <div>
            <h1 id="beerTitle">SEASONAL CRAFT BEERS</h1>
            <div 
            className={`beerDisplay ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
                <img className="beerImages" src={beerImage1}/>
                <img className="beerImages" src={beerImage2}/>
                <img className="beerImages" src={beerImage3}/>
                <img className="beerImages" src={beerImage4}/>
            </div>
        </div>
    )
}

export default BeerDisplay;