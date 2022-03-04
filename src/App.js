
import './App.css';
import { ThemeProvider } from './context/ThemeContext'
import { WeatherProvider } from './context/WeatherContext'
import Container from './components/Container'





function App() {

  return (
    <>
      <ThemeProvider>
        <WeatherProvider>
          <Container />
        </WeatherProvider>
      </ThemeProvider>

    </>
  )
}

export default App;
