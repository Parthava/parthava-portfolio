import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import hrms from '../../public/hrms.png';
import lms from '../../public/lms.png';
import cams from '../../public/cams.png';
import ml from '../../public/ml.jpg';

const projectVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.5 } },
};

function Project() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div style={{ marginTop: '60px' }}>
      <Container>
        <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Projects</h2>
        <Row xs={1} sm={2} md={4} style={{ marginTop: '30px' }}>
          <Col>
            <motion.div
              ref={ref}
              variants={projectVariants}
              initial="hidden"
              animate={inView ? 'visible' : ''}
            >
              <Card style={{ height: '24rem' }}>
                <Card.Img variant="top" src={hrms.src} style={{ width: '305px', height: '200px' }}/>
                <Card.Body>
                  <Card.Title>HR management system</Card.Title>
                  <Card.Text>A suite of software applications used to manage human resources and related processes
                            throughout the employee lifecycle. <br/> Frontend: ReactJS. Backend: NestJS Database: MongoDB</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              ref={ref}
              variants={projectVariants}
              initial="hidden"
              animate={inView ? 'visible' : ''}
            >
              <Card style={{ height: '24rem' }}>
                <Card.Img variant="top" src={lms.src} style={{ width: '305px', height: '200px' }}/>
                <Card.Body>
                  <Card.Title>Learning Management System</Card.Title>
                  <Card.Text>A software application for the administration, documentation, tracking, reporting, automation, 
                    and delivery of educational courses. <br/> Frontend: React. Backend: NodeJs + Express. Database: MongoDB</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              ref={ref}
              variants={projectVariants}
              initial="hidden"
              animate={inView ? 'visible' : ''}
            >
              <Card style={{ height: '24rem' }}>
                <Card.Img variant="top" src={cams.src} style={{ width: '305px', height: '175px' }}/>
                <Card.Body>
                  <Card.Title>College website admin system</Card.Title>
                  <Card.Text>Developed the backend for website management and admission process. <br/> 
                  Backend: Flask. Frontend: HTML + CSS + Bootstrap. Database: MySQL</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              ref={ref}
              variants={projectVariants}
              initial="hidden"
              animate={inView ? 'visible' : ''}
            >
              <Card style={{ height: '24rem' }}>
                <Card.Img variant="top" src={ml.src} style={{ width: '305px', height: '175px' }}/>
                <Card.Body>
                  <Card.Title>Image classification with data augmentation using ML</Card.Title>
                  <Card.Text>Developed a system to train and then classify different images using “Flower17”. 
                    <br/> Language: Python, TKinter GUI kit</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
