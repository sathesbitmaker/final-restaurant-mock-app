import restaurantLogo from '../images/restaurantLogo.jpg'
import '../CSS/BottomHeader.css'

function BottomHeader () {
    return (
        <div className="bottom">
            <img className="restaurantLogo" src={restaurantLogo}/>
            <h1>1289 Bremlin Render Street, Rolling Avenue, Mozzarella</h1>
            <h1>RESERVATIONS NUMBER: 318029130289</h1>
            <h1>WORKING HOURS:</h1>
            <h1>MON- FRI: 08:00 AM - 10:00 PM</h1>
            <h1>SAT - SUN: 10:00 AM - 11:00 PM</h1>
        </div>
    )
}

export default BottomHeader;
