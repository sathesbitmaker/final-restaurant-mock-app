import React,{Component} from 'react';
import Intro from './components/Intro.js'
import OurMission from './components/OurMission.js'
import MenuDisplay from './components/MenuDisplay.js'
import BeerDisplay from './components/BeerDisplay.js'
import BottomHeader from './components/BottomHeader.js'
<link rel="preconnect" href="https://fonts.gstatic.com"
href="https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap" rel="stylesheet"></link>

class App extends Component {
  render () {
    return (
      <div>
        <Intro />
        <OurMission />
        <MenuDisplay />
        <BeerDisplay />
        <BottomHeader />
      </div>
    )
  }
}


export default App;
