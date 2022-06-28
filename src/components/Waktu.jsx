import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Fade from 'react-reveal/Fade'
import './Waktu.css'

const Waktu = () => {
  return (
    <Row className='m-0 waktu justify-content-center align-items-center section'>
        <Col className='text-center text-dark' sm lg={6}>
            <Fade left>
                <Card className="waktu__akad">
                    <Card.Body>
                        <h2 className='mb-5 fw-bold'>Akad Nikah</h2>
                        <Row className='mb-5 dash'>
                            <Col className='pt-3'>
                                <Card.Text>07.00 - 08.00 WIB</Card.Text>
                            </Col>
                            <Col className='cell'>
                                <Card.Text><span className='d-block'>18</span>
                                Juli
                                <span className='d-block'>2022</span></Card.Text>
                            </Col>
                            <Col className='pt-3'>
                                <Card.Text>Rumah mempelai perempuan</Card.Text>
                            </Col>
                        </Row>
                        <Card.Text className='fst-italic'>Dsn. Gebyaran RT.03/RW.06 Ds Puhjarak, Plemahan, Kediri</Card.Text>
                        <a rel='noreferrer' target='_blank' className='btn btn-dark btn__waktu' href="https://www.google.com/calendar/render?action=TEMPLATE&text=Denny+and+Deka+Wedding+day&details=Denny+and+Deka+Wedding+on+Monday%2C+18+July+2022&location=Gebyaran%2C+Puhjarak%2C+Kec.+Plemahan%2C+Kabupaten+Kediri%2C+Jawa+Timur+64155&dates=20220719T000000Z%2F20220719T010000Z">Add to Google calendar</a>
                    </Card.Body>
                </Card>
            </Fade>
        </Col>
        <Col className='text-center text-dark' sm lg={6}>
            <Fade right>
                <Card className="waktu__resepsi">
                    <Card.Body>
                        <h2 className='mb-5 fw-bold'>Resepsi</h2>
                        <Row className='mb-5 dash'>
                            <Col className='pt-3'>
                                <Card.Text>09.00 - 12.00 WIB</Card.Text>
                            </Col>
                            <Col className='cell'>
                            <Card.Text><span className='d-block'>25</span>
                                Juli
                                <span className='d-block'>2022</span></Card.Text>
                            </Col>
                            <Col className='pt-3'>
                                <Card.Text>Rumah mempelai Laki-laki</Card.Text>
                            </Col>
                        </Row>
                        <Card.Text className='fst-italic'>Dsn. Mojoroto RT.03/RW.06 Ds Puhjarak, Plemahan, Kediri</Card.Text>
                        <a rel='noreferrer' target='_blank' className='btn btn-dark btn__waktu' href="https://www.google.com/calendar/render?action=TEMPLATE&text=Denny+and+Deka+Reception+Day&details=Denny+and+Deka+Reception+Day+on+Monday%2C+25+July+2022&location=Mojoroto%2C+Wonokerto%2C+Kec.+Plemahan%2C+Kabupaten+Kediri%2C+Jawa+Timur&dates=20220725T020000Z%2F20220725T050000Z">Add to Google calendar</a>
                    </Card.Body>
                </Card>
            </Fade>
        </Col>
    </Row>
  )
}

export default Waktu