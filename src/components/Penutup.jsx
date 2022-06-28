import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import instagram from '../assets/instagram.svg'
import Fade from 'react-reveal/Fade'
import './Penutup.css'

const Penutup = () => {
  return (
    <Row className='m-0 justify-content-center align-items-center penutup section'>
        <Col className='text-center text-dark'>
            <h2 className='penutup__title d-none'>Penutup</h2>
            <Fade>
              <div className="penutup__detail mb-5">
                  <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/Saudari berkenan hadir memberikan doa restu.</p>
                  <p>Jika bisa hadir kami tunggu konfirmasinya, Informasi: Di meja penerima tamu akan kami sediakan hand sanitizer dan pemeriksaan suhu tubuh.</p>
                  <p>Jika tidak memungkinkan untuk hadir di pernikahan kami, tidak mengapa, semoga bisa berjumpa di lain kesempatan.</p>
                  <p>Stay safe.</p>
              </div>
            </Fade>
            <div className='penutup__sosmed d-flex'>
              <Fade left>
                <div className='penutup__sosmed-left'>
                <a rel='noreferrer' target='_blank' href="https://instagram.com/kres_no?igshid=YmMyMTA2M2Y="><img className='img-fluid penutup__img' src={instagram} alt="instagram icon" /> Denny</a>
                </div>
              </Fade>
              <Fade right>
                <div className='penutup__sosmed-right'>
                <a rel='noreferrer' target='_blank' href="https://instagram.com/dechayoso?igshid=YmMyMTA2M2Y="> <img className='img-fluid penutup__img' src={instagram} alt="instagram icon" /> Deka</a>
                </div>
              </Fade>
            </div>
        </Col>
    </Row>
  )
}

export default Penutup