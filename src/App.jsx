import './App.scss'
import Navbar from "./components/sections/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import CardsSection from "./components/sections/Cards.jsx";
import DizajnUsluge from "./components/sections/DizajnUsluge.jsx";

const App = () => {
    return (<>
            <Navbar/>
            <Hero/>
            <CardsSection/>
            <DizajnUsluge/>
        </>

    )
}

export default App
