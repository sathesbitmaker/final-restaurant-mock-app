import '../CSS/Intro.css';

function Intro() {
    return (
    <div className="Intro">
        <h1 className="all" id='first'> Top-Notch Cuisine</h1> 
        <h1 className="all" id='second'>Opening Hours</h1>                     
        <h1 className="all" id='third'>Monday-Friday</h1> 
        <h1 className="all" id='fourth'>8:00am-12:00pm</h1>
    </div>
    )};
    
    export default Intro;

window.onload = function() {
    document.body.style.backgroundSize = "85rem";
}