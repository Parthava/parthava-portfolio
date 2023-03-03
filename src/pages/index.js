import Head from 'next/head';
import Header from '../components/header';
import HeroImage from '../components/hero-image';
import heroImage from '../../public/hero.jpg';
import AboutSection from '../components/about';
import Project from '../components/projects';
import ContactUs from '../components/contactUs';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Website</title>
        <meta name="description" content="This is my website." />
      </Head>
      <Header/>
      <main>
        <div id='home'>
          <HeroImage imageUrl={heroImage.src} text="Hello, I'm Parthava Borah"/>
        </div>
        <div id='about'>
          <AboutSection
            title="About Me"
            description="As a skilled developer with a strong passion for innovation, I specialize in creating exceptional 
            web applications using React, NodeJs, and the powerful framework Nest.js. With a keen interest in staying at the 
            forefront of my field, I'm always eager to learn about the latest technologies and tools that can help me develop 
            cutting-edge solutions for complex problems. I have a Bachelor's degree in Computer Science from the esteemed 
            Girijananda Chowdhury Institute of Management & Technology, and my professional experience as a Programmer Analyst Trainee 
            has further sharpened my skills as a backend developer. I'm excited to take on challenging projects that require 
            creative thinking and strategic problem-solving."
          />
        </div>
        <div id='projects'>
          <Project/>
        </div>
        <div id='contact'>
          <ContactUs/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
