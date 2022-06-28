import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Fade from 'react-reveal/Fade'
import './Header.css'

const Header = () => {
    return (
        <Row className='m-0 justify-content-center align-items-center header section'>
            <Col className='text-center'>
                <Fade top>
                    <h1 className='header__title'>Undangan Pernikahan</h1>
                </Fade>
                <div className="header__detail">
                    <Fade left>
                        <p>Denny</p>
                    </Fade>
                    <Fade>
                        <p>&amp;</p>
                    </Fade>
                    <Fade right>
                        <p>Deka</p>
                    </Fade>
                </div>
            </Col>
        </Row>
    )
}

export default Header