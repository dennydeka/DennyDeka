import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Shake from 'react-reveal/Shake'
import './Alamat.css'

const Alamat = () => {
  return (
    <Row className='m-0 justify-content-center align-items-center lokasi section'>
        <Col className='text-center'>
          <Shake>
            <h2 className='lokasi__title mb-5 fw-bold'>Lokasi Akad Nikah</h2>
          </Shake>
            <div className="lokasi__map mb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5566900083636!2d112.15070999999999!3d-7.7306178999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785c9ba3326f6b%3A0xf64aa10c9f0cc6b8!2sWarung%20Lontong%20Ibu%20Misih!5e0!3m2!1sen!2sid!4v1656228566158!5m2!1sen!2sid" width="100%" height="450" style={{border: "0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
            </div>
            <a rel='noreferrer' target='_blank' className='btn btn-dark btn__map' href="https://goo.gl/maps/u2Btfe6HrBhzFuSTA">Buka di Google Map</a>
        </Col>
    </Row>
  )
}

export default Alamat