import { useContext } from 'react'
import ThemeContext, { ThemeProvider } from '../context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container className={theme === "dark" ? "footer" : "footerL"}>
      <Row>
        <Col style={{ opacity: '0.5', display: 'flex', alignItems: 'center' }}> Developed by <a className="fa" href="https://github.com/raikonen14" target="_blank"><span className="fspan">&nbsp;Ömer IŞIK</span></a></Col>
      </Row>
    </Container>
  )
}

export default Footer;