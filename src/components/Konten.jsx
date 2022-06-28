import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import image from '../assets/bismillah.png'
import flower from '../assets/flowers_konten-bot.png'

import Fade from 'react-reveal/Fade'
import './Konten.css'

const Konten = () => {
  return (
    <Row className='m-0 justify-content-center align-items-center konten section'>
        <Col className='text-center'>
            <h2 className='d-none'>Undangan Pernikahan</h2>
            <Fade>
                <div className="konten__image px-5 mb-5">
                    <img className='img-fluid konten__img' src={image} alt="bismillah" />
                </div>
                <div className="konten__detail mb-5">
                    <p>Assalamu'alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridha Allah swt, kami bermaksud membagikan kabar bahagia ini sekaligus memohon doa dan restu dari Saudara sekalian untuk pernikahan kami.</p>
                </div>
                <div className="konten__subject mb-5">
                    <p className='konten__name'>Deka Nurhidayati</p>
                    <p className='fst-italic'>Putri dari Bapak Imam Mujianto &amp; Ibu Miasih</p>
                    <p>&amp;</p>
                    <p className='konten__name'>Denny Kresna W</p>
                    <p className='fst-italic'>Putra dari Bapak Purwadi &amp; Ibu Menik</p>
                </div>
                <div className='konten__img-bot'>
                    <img className='img-fluid' src={flower} alt="flower" />
                </div>
            </Fade>
        </Col>
    </Row>
  )
}

export default Konten