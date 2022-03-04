import ThemeContext, { ThemeProvider } from '../context/ThemeContext'
import { useContext, useState, useEffect } from 'react'
import DarkTheme from './DarkTheme'
import WeatherContext from '../context/WeatherContext'
import { MdSystemUpdateAlt } from 'react-icons/md';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

function Header() {

  const { theme } = useContext(ThemeContext);
  const { weather, setWeather } = useContext(WeatherContext);
  const { city, setCity } = useContext(WeatherContext);
  const [forecast, setForecast] = useState({});
  const api = "1dfa3d9c7c772c3ae219a1f106a33db5";

  return (
    <div>
      {(typeof weather.main != 'undefined') ? (
        <>

          <Container className={theme === "dark" ? "HeaderContainer-l" : "HeaderContainer-d"}>
            <Row>
              <Col >
                <input name="city"
                  placeholder="location"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  autoComplete="off"
                  style={{ width: '40%', height: '30px', borderRadius: '5px', padding: '10px' }} />
              </Col>
              <Col xs={1} style={{width: '20%' }}>
                <p style={{ fontWeight: '600'}}>{weather.name},{weather.sys.country}</p>
              </Col>
              <Col >
                <DarkTheme />
              </Col>
            </Row>
          </Container>
        </>
      ) : ('')}
    </div>
  )
}

export default Header