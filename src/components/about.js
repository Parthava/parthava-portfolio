import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import avatar from '../../public/avatar.jpg';

function AboutSection({ title, description, imageUrl }) {
  const imageVariants = {
    hidden: { x: -300 },
    visible: {
      x: 0,
      transition: { delay: 0.2, duration: 0.5, type: 'spring', stiffness: 120 }
    }
  };

  const textVariants = {
    hidden: { x: 300 },
    visible: {
      x: 0,
      transition: { delay: 0.3, duration: 0.6, type: 'spring', stiffness: 120 }
    }
  };

  return (
    <div style={{ marginTop: '60px' }}>
      <Container>
        <h2 style={{ textAlign: 'center', textDecoration: 'underline', color: 'black' }}>{title}</h2>
        <Row>
          <Col md={4}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <Image src={avatar.src} fluid style={{ width: '350px', height: '350px' }} />
            </motion.div>
          </Col>
          <Col md={8}>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ marginTop: '20px' }}
            >
              {description}
            </motion.p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
