import { useContext } from 'react'
import DarkTheme from './DarkTheme'
import Header from './Header'
import ThemeContext from '../context/ThemeContext'
import WeatherContext from '../context/WeatherContext'
import Main from './Main'
import Footer from './Footer'



function Container() {
    const { theme } = useContext(ThemeContext);
    const { weather } = useContext(WeatherContext);
    const L = {
        body: '#fff',
        fontColor: '#000'
    }
    const D = {
        body: '#fff',
        fontColor: '#000'
    }

    return (
        <>
            <div className={theme === "dark" ? "app dark" : "ligth"}>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default Container