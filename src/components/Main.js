import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ThemeContext from '../context/ThemeContext'
import { useContext, useEffect } from 'react'
import gunesli from '../icon/01d.svg'
import derece from '../icon/celsius.svg'
import sunrise from '../icon/sunrise.svg'
import humidity from '../icon/humidity.svg'
import thermometerWarmer from '../icon/thermometer-warmer.svg'
import wind from '../icon/windsock.svg'
import sunset from '../icon/sunset.svg'
import thermometerColder from '../icon/thermometer-colder.svg'
import compas from '../icon/compass_1.svg'
import WeatherContext from '../context/WeatherContext'
import clearskyD from '../icon/01d.svg'
import clearskyN from '../icon/01n.svg'
import fewcloudsD from '../icon/02d.svg'
import fewcloudsN from '../icon/02n.svg'
import rainD from '../icon/10d.svg'
import rainN from '../icon/10n.svg'
import tunderstromD from '../icon/11d.svg'
import tunderstromN from '../icon/11n.svg'
import snowD from '../icon/13d.svg'
import snowN from '../icon/13n.svg'
import mistD from '../icon/50d.svg'
import mistN from '../icon/50n.svg'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const dateSub = new Date();
const a1 = days[dateSub.getDay()];
const a2 = days[(((dateSub.getDay()) + 1)) % 7];
const a3 = days[(((dateSub.getDay()) + 2)) % 7];
const a4 = days[(((dateSub.getDay()) + 3)) % 7];



function Main() {
    function calcTime(t) {
        var time = new Date(t * 1000).toLocaleTimeString("tr-TR");
        return time;
    }
    const { weather, forecast } = useContext(WeatherContext);
    const { theme } = useContext(ThemeContext);


    const weatherStats = (t) => {
        if (t == "Clear") {
            return <img style={{ width: "100%" }} src={clearskyD} />
        }
        else if (t == "Few clouds") {
            return <img style={{ width: "100%" }} src={fewcloudsD} />
        }
        else if (t == "Rain" || t == "Drizzle") {
            return <img style={{ width: "100%" }} src={rainD} />
        }
        else if (t == "Thunderstorm") {
            return <img style={{ width: "100%" }} src={tunderstromD} />
        }
        else if (t == "Snow") {
            return <img style={{ width: "100%" }} src={snowD} />
        }
        else if (t == "Mist" || t == "Smoke" || t == "Haze" || t == "Dust" || t == "Fog" || t == "Sand" || t == "Ash" || t == "Squall" || t == "Tornado") {
            return <img style={{ width: "100%" }} src={mistD} />
        }
        else {
            return <img style={{ width: "100%" }} src={fewcloudsD} />
        }
    }
    const weatherStatsN = (n) => {
        if (n == "Clear") {
            return <img style={{ width: "100%" }} src={clearskyN} />
        }
        else if (n == "Few clouds") {
            return <img style={{ width: "100%" }} src={fewcloudsN} />
        }
        else if (n == "Rain" || n == "Drizzle") {
            return <img style={{ width: "100%" }} src={rainN} />
        }
        else if (n == "Thunderstorm") {
            return <img style={{ width: "100%" }} src={tunderstromN} />
        }
        else if (n == "Snow") {
            return <img style={{ width: "100%" }} src={snowN} />
        }
        else if (n == "Mist" || n == "Smoke" || n == "Haze" || n == "Dust" || n == "Fog" || n == "Sand" || n == "Ash" || n == "Squall" || n == "Tornado") {
            return <img style={{ width: "100%" }} src={mistN} />
        }
        else {
            return <img style={{ width: "100%" }} src={fewcloudsN} />
        }
    }






    return (
        <>
            {(typeof weather.main != 'undefined') ? (
                <>


                    <Container className={theme === "dark" ? "main-l" : "main-d"}>
                        <Row>
                            <Col sm={3}>
                                <Row style={{ width: '70%', display: 'flex', margin: '0 auto' }}>{weatherStats(weather.weather[0].main)}</Row>
                                <Row style={{ fontSize: '40px', display: 'flex', justifyContent: 'center', marginTop: '-20px' }}>{weather.weather[0].main}</Row>
                                <Row style={{ fontSize: '25px', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>{Math.round(weather.main.temp)}°</Row>
                            </Col>
                            <Col sm={9}>
                                <Row className="m-s2-r">Current Weather</Row>
                                <Row className="m-s2-r2">{`${dateSub.getDate()}.${dateSub.getMonth() + 1}.${dateSub.getFullYear()}`}, {days[dateSub.getDay() - 1]}, {`${dateSub.getHours()}:${dateSub.getMinutes()}`}</Row>
                                <Row>

                                    <Col className="m-s2"><img src={sunrise} style={{ width: '40%' }}></img>Sunrise:<br></br>{calcTime(weather.sys.sunrise).substring(0, 5)}</Col>
                                    <Col className="m-s2"><img src={humidity} style={{ width: '40%' }}></img>Humidity:<br></br>%{weather.main.humidity}</Col>
                                    <Col className="m-s2"><img src={thermometerColder} style={{ width: '40%' }}></img>Max Temp:<br></br>{Math.round(weather.main.temp_max)}</Col>
                                    <Col className="m-s2"> <img src={wind} style={{ width: '40%' }}></img>Max Speed:<br></br>{Math.round(weather.wind.speed)} km/h</Col>
                                </Row>
                                <Row>

                                    <Col className="m-s2"><img src={sunset} style={{ width: '40%' }}></img>Sunset:<br></br>{calcTime(weather.sys.sunset).substring(0, 5)}</Col>

                                    <Col className="m-s2"> <img src={derece} style={{ width: '40%' }}></img>Feels Like:<br></br>{Math.round(weather.main.feels_like)}°</Col>

                                    <Col className="m-s2"> <img src={thermometerWarmer} style={{ width: '40%' }}></img>Min Temp:<br></br>{Math.round(weather.main.temp_min)}</Col>

                                    <Col className="m-s2"> <img src={compas} style={{ width: '40%', transform: `rotate(${weather.wind.deg}deg)` }}></img>Direction</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                </>
            ) : ('')}

            {(typeof forecast.list != 'undefined') ? (
                <>

                    <Container style={{ marginTop: '20px' }}>
                        <Row>
                            <Col className={theme === "dark" ? "m-s3-cD" : "m-s3-cL"}>
                                <Row>{weatherStatsN(forecast.list[6].weather[0].main)}</Row>
                                <Row className="m-s3-r">{forecast.list[6].weather[0].main}</Row>
                                <Row className="m-s3-r">{Math.round(forecast.list[6].main.temp)}°C</Row>
                                <Row className="m-s3-r-2" style={{ marginTop: '15px' }}>{a1}</Row>
                                <Row className="m-s3-r-2">00:00</Row>
                            </Col >
                            <Col className={theme === "dark" ? "m-s3-cD" : "m-s3-cL"}>
                                <Row>{weatherStats(forecast.list[10].weather[0].main)}</Row>
                                <Row className="m-s3-r">{forecast.list[10].weather[0].main}</Row>
                                <Row className="m-s3-r">{Math.round(forecast.list[10].main.temp)}°C</Row>
                                <Row className="m-s3-r-2" style={{ marginTop: '15px' }}>{a1}</Row>
                                <Row className="m-s3-r-2">12:00</Row>
                            </Col>
                            <Col className={theme === "dark" ? "m-s3-cD" : "m-s3-cL"}>
                                <Row>{weatherStatsN(forecast.list[14].weather[0].main)}</Row>
                                <Row className="m-s3-r">{forecast.list[14].weather[0].main}</Row>
                                <Row className="m-s3-r">{Math.round(forecast.list[14].main.temp)}°C</Row>
                                <Row className="m-s3-r-2" style={{ marginTop: '15px' }}>{a2}</Row>
                                <Row className="m-s3-r-2">00:00</Row>
                            </Col>
                            <Col className={theme === "dark" ? "m-s3-cD" : "m-s3-cL"}>
                                <Row>{weatherStats(forecast.list[18].weather[0].main)}</Row>
                                <Row className="m-s3-r">{forecast.list[18].weather[0].main}</Row>
                                <Row className="m-s3-r">{Math.round(forecast.list[18].main.temp)}°C</Row>
                                <Row className="m-s3-r-2" style={{ marginTop: '15px' }}>{a2}</Row>
                                <Row className="m-s3-r-2">12:00</Row>
                            </Col>
                            <Col className={theme === "dark" ? "m-s3-cD" : "m-s3-cL"}>
                                <Row>{weatherStatsN(forecast.list[22].weather[0].main)}</Row>
                                <Row className="m-s3-r">{forecast.list[22].weather[0].main}</Row>
                                <Row className="m-s3-r">{Math.round(forecast.list[22].main.temp)}°C</Row>
                                <Row className="m-s3-r-2" style={{ marginTop: '15px' }}>{a3}</Row>
                                <Row className="m-s3-r-2">00:00</Row>
                            </Col>
                            <Col className={theme === "dark" ? "m-s3-cD" : "m-s3-cL"}>
                                <Row>{weatherStats(forecast.list[26].weather[0].main)}</Row>
                                <Row className="m-s3-r">{forecast.list[26].weather[0].main}</Row>
                                <Row className="m-s3-r">{Math.round(forecast.list[26].main.temp)}°C</Row>
                                <Row className="m-s3-r-2" style={{ marginTop: '15px' }}>{a3}</Row>
                                <Row className="m-s3-r-2">12:00</Row>
                            </Col>
                            <Col className={theme === "dark" ? "m-s3-cD" : "m-s3-cL"}>
                                <Row>{weatherStatsN(forecast.list[30].weather[0].main)}</Row>
                                <Row className="m-s3-r">{forecast.list[30].weather[0].main}</Row>
                                <Row className="m-s3-r">{Math.round(forecast.list[30].main.temp)}°C</Row>
                                <Row className="m-s3-r-2" style={{ marginTop: '15px' }}>{a4}</Row>
                                <Row className="m-s3-r-2">00:00</Row>
                            </Col>

                        </Row>
                    </Container>


                </>
            ) : ('')}

        </>
    )
}

export default Main