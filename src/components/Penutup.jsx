import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import whatsapp from '../assets/whatsapp.svg'
import Fade from 'react-reveal/Fade'
import './Penutup.css'

const Penutup = () => {
  return (
    <Row className='m-0 justify-content-center align-items-center penutup section'>
        <Col className='text-center text-dark'>
            <h2 className='penutup__title d-none'>Penutup</h2>
            <Fade>
              <div className="penutup__detail mb-5">
                  <p className='ayat'>وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُوْنَ</p>
                  <p><q>Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).</q></p>
                  <p className='fw-bold'>QS. 51:49</p>
                  <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/Saudari berkenan hadir dan memberikan doa restu.</p>
                  <p>Jika tidak memungkinkan untuk hadir di pernikahan kami, tidak mengapa, semoga bisa berjumpa di lain kesempatan.</p>
                  <p>Stay safe.</p>
              </div>
            </Fade>
            <div className='penutup__sosmed d-flex'>
              <Fade left>
                <div className='penutup__sosmed-left'>
                <a rel='noreferrer' target='_blank' href="https://api.whatsapp.com/send?phone=628563664334&text=Selamat%20bro%2C%20Barakallahu%20lakuma%20wa%20baraka%20%E2%80%98alaikuma%20wa%20jama%E2%80%99a%20bainakuma%20fii%20khair%20%F0%9F%99%8F"><img className='img-fluid penutup__img' src={whatsapp} alt="whatsapp icon" /> Denny</a>
                </div>
              </Fade>
              <Fade right>
                <div className='penutup__sosmed-right'>
                <a rel='noreferrer' target='_blank' href="https://api.whatsapp.com/send?phone=628974961475&text=Selamat%20sis%2C%20Barakallahu%20lakuma%20wa%20baraka%20%E2%80%98alaikuma%20wa%20jama%E2%80%99a%20bainakuma%20fii%20khair%20%F0%9F%99%8F"><img className='img-fluid penutup__img' src={whatsapp} alt="whatsapp icon" /> Deka</a>
                </div>
              </Fade>
            </div>
        </Col>
    </Row>
  )
}

export default Penutup