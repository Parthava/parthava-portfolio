import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from "framer-motion";

function Contact() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const formVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 120,
        duration: 0.5,
      },
    },
  };

  return (
    <div style={{ marginTop: '110px' }}>
      <Container>
        <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Get in touch</h2>
        <div ref={ref} style={{ width: '50%', margin: '0 auto' }}>
          <AnimatePresence>
            {inView && (
              <motion.div
                initial="hidden"
                animate={controls}
                variants={formVariants}
                exit="hidden"
              >
                <Form>
                  <Form.Group controlId="formBasicName" style={{ marginBottom: '20px' }}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" style={{ marginBottom: '20px' }}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicSubject" style={{ marginBottom: '20px' }}>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter subject" />
                  </Form.Group>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button className="btn btn-primary" type="submit" style={{ marginTop: '2px', marginBottom: '70px' }}>
                      Submit
                    </button>
                  </div>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
