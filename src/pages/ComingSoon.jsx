import React from 'react'
import { Container } from 'react-bootstrap'

const ComingSoon = () => {
  return (
    <div>
      <Container id='home' style={{height: '100vh'}} className='d-flex vw-100 position-relative'>
            <div style={{color: 'white'}} className='position-absolute top-50 start-50 translate-middle'>
              <span >
              <h1 style={{
                fontSize: '70px'
              }} className='logo d-flex justify-content-center'>Coming Soon...</h1>
              </span>
            </div>
      </Container>
    </div>
  )
}

export default ComingSoon
