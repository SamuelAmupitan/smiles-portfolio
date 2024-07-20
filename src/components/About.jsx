/** @format */

import Button from './Button';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaGithub,
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTypescript } from 'react-icons/bi';

function About() {
  return (
    <section className="about" id="about">
      <h2>Get to know me</h2>

      <div className="about-container">
        <div className="about-img-container">
          <img
            src="https://placehold.co/348x429"
            alt="A picture of Samuel Oluwabusayo"
          />
        </div>

        <div className="about-text-container">
          <div className="stack">
            <FaHtml5 />
            <FaCss3Alt />
            <RiTailwindCssFill />
            <IoLogoJavascript />
            <BiLogoTypescript />
            <FaReact />
            <FaVuejs />
            <FaGithub />
          </div>
          <p>
            I’m a passionate Front-End developer specializing in developing
            innovative web applications using technologies such as JavaScript,
            TypeScript, React.js, and Vue.js. I focus on implementing user
            interface design and solving user problems with HTML, CSS, and
            JavaScript, creating products that are both responsive and
            user-centric. Beyond coding, I am a Technical Writer and a tech
            gadgets lover who enjoys spending my free time watching movies,
            listening to music, reading, and learning more about tech gadgets. I
            am eager to bring my skills and enthusiasm to a dynamic tech company
            where I can contribute and grow.
          </p>

          <Button
            text="My CV"
            className="cv-btn"
            link="https://drive.google.com/file/d/1pBDEL8bhWM8ah-nMI8T4CRQIn_hx0GAm/view?usp=sharing"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
