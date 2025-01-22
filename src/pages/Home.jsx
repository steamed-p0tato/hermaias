import React from 'react'

import '../App.css'
import { Container, Nav, Row, Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
    <section id='home'>
      <Container style={{height: '100vh'}} className='d-flex vw-100 position-relative'>
            <div style={{color: 'white'}} className='position-absolute top-50 start-50 translate-middle'>
              <span >
              <h1 style={{
                fontSize: '70px'
              }} className='logo d-flex justify-content-center'>HERMEiAS</h1>
              <p style={{
                paddingTop: '15px',
                fontWeight: 'initial',
                fontSize: '20px',
                color: 'GrayText'
              }} className='logo d-flex justify-content-center'>OPEN AND PRIVATE</p>
              </span>
            </div>
      </Container>
      </section>
      <section className='padding-top-bottom' id='products' style={{background: '#0d0d0d'}}>
        <Container >
          <h1 className='d-flex justify-content-center block' style={{color:'white'}}>Products</h1>
          <Row sm={3} lg={3} md={3}  className='d-flex justify-content-center py-5' style={{paddingBottom: '50px'}}>
              <Card className='block card-animation card-grey-shade my-3 mx-2' style={{width: '18rem',}}>
                <Card.Body style={{
                  padding: '10%',
                }}>
                  <Card.Title className='text-white'>
                    Mystiko
                  </Card.Title>
                  <Card.Text style={{height: '70%'}} className='pt-2 card-text'>
                  A next-generation secure messaging platform that puts your privacy first. With end-to-end encryption, self-destructing messages, and zero data collection, Hi ensures your conversations remain truly private.
                  </Card.Text>
                  <Card.Footer><Link to='/comingsoon'><Button variant='dark' className='card-button'>Learn More</Button></Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
              <Card className='block card-grey-shade my-3 mx-2' style={{width: '18rem'}}>
                <Card.Body style={{
                  padding: '30px',
                }}>
                  <Card.Title className='text-white'>
                    EnSights
                  </Card.Title>
                  <Card.Text style={{height: '70%'}} className='pt-2 card-text'>
                    A revolutionary localized LLM solution that securely analyzes your company's sales data. Transform raw data into actionable insights while keeping your sensitive information completely private and on-premises.
                  </Card.Text>
                  <Card.Footer><Link to='/comingsoon'><Button variant='dark' className='card-button'>Learn More</Button></Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
              <Card className='block card-grey-shade my-3 mx-2' style={{width: '18rem'}}>
                <Card.Body style={{
                  padding: '30px',
                }}>
                  <Card.Title className='text-white'>
                    DemoLe AI
                  </Card.Title>
                  <Card.Text style={{height: '70%'}} className='pt-2 card-text'>
                    Democratizing legal assistance through AI trained on comprehensive legal data. Get instant access to legal information, document analysis, and guidance for common legal issues, making justice more accessible to all.
                  </Card.Text>
                  <Card.Footer><Link to='/comingsoon'><Button variant='dark' className='card-button'>Learn More</Button></Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
              <Card className='block card-grey-shade my-3 mx-2' style={{width: '18rem'}}>
                <Card.Body style={{
                  padding: '30px',
                }}>
                  <Card.Title className='text-white'>
                    InfoKon
                  </Card.Title>
                  <Card.Text style={{height: '70%'}} className='pt-2 card-text'>
                    A secure marketplace connecting clients with verified private investigators. Whether you're seeking investigative services or offering your expertise, our platform ensures professional, confidential connections.
                  </Card.Text >
                  <Card.Footer><Link to='/comingsoon'><Button variant='dark' className='card-button'>Learn More</Button></Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
          </Row>
        </Container>
      </section>
      <section id='about' className='padding-top-bottom' style={{backgroundColor: '#141414'}}>
        <Container className='text-align-center text-white' style={{paddingRight: '10%', paddingLeft: '10%'}}>
          <h1 className='block' style={{fontWeight: 400}}>Manifesto: A more open and private future</h1>
          <br/>
          <div className='credits' style={{fontWeight: 450, wordSpacing: 1, color: '#C9C9C9', lineHeight: 1.7, paddingBottom: '10%'}}>
          <p>In a world where our conversations are increasingly monitored, tracked, and commodified, your data catagorized and sold we stand for something different. We believe that privacy is not a luxury — it's a fundamental right.</p>
            <p>At <strong>Hermeias</strong>, we are committed to creating tools and applications that put <em>you</em> in control. Our goal is simple: to empower individuals with secure and affordable tools from localized AI to messaging that is free from surveillance, advertising, or hidden agendas.</p>
            <p>We believe:</p>
            <ul>
                <li><strong>Privacy is a Human Right</strong>: Every conversation you have, every idea you share, should remain your own. We will never compromise your privacy for profit.</li>
                <li><strong>Transparency is Key</strong>: You deserve to know how your data is handled. Our systems are open, our policies are clear, and we commit to never selling your data to anyone.</li>
                <li><strong>Encryption is Essential</strong>: From end-to-end encryption to cutting-edge security protocols, we ensure that your work stay private — even from us.</li>
                <li><strong>Freedom from Ads</strong>: Our apps are built without the distractions of invasive ads. The only thing we'll ever ask for is your trust.</li>
                <li><strong>Control is Yours</strong>: We provide you with the tools to manage your own security, customize your experience, and make informed choices about how you communicate.</li>
            </ul>
            <p>In a world that increasingly threatens personal privacy, we offer a different path: one where you control your data, your messages, and your freedom to communicate without fear. With us, privacy isn't an afterthought — it's the foundation of everything we do.</p>
            <p>Welcome to a new era of messaging. Welcome to privacy. Welcome to <strong>Hermeias</strong>.</p>
            </div>
            <Container className='credits'  style={{borderTop: '1px solid #3b3b3b'}}>
              <Col className='d-flex flex-column' style={{paddingTop: '10%'}}>
              <h2 style={{fontWeight: 300}} className='d-flex pb-4 justify-content-center'>Our Team:</h2>
              <h4 className='d-flex justify-content-center'>Suryansh Nandwani</h4>
              <p className='d-flex justify-content-center position-color'>Chief Executive Officer</p>
              <h4 className='d-flex justify-content-center'>Ariyan Basu</h4>
              <p className='d-flex justify-content-center position-color'>Chief Technology Officer</p>
              <h5 style={{fontWeight: 400}} className='d-flex justify-content-center pt-3'>Saptarshi Paul</h5>
              <p className='d-flex justify-content-center position-color'>Lead Frontend Developer</p>
              <h5 style={{fontWeight: 400}} className='d-flex justify-content-center'>Pallav</h5>
              <p className='d-flex justify-content-center position-color'>Developer</p>
              </Col>
            </Container>
        </Container>
      </section>
    </>
  )
}

export default Home
