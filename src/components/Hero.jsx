/** @format */

import Button from './Button';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text-container">
        <h2>Samuel Amupitan</h2>
        <h1>Frontend Developer</h1>
        <p>
          I specialize in developing innovative web applications using
          technologies such as JavaScript, TypeScript, React.js, and Vue.js. I
          focus on implementing user interface design and solving user problems
          with HTML, CSS, and JavaScript, creating products that are both
          responsive and user-centric
        </p>

        <div className="hero-btn">
          <Button
            text="Contact me"
            className=" contact-btn"
            link="#contact"
            target="_self"
          />
          <Button
            text="My CV"
            className="cv-btn"
            link="https://drive.google.com/file/d/1pBDEL8bhWM8ah-nMI8T4CRQIn_hx0GAm/view?usp=sharing"
            target="_blank"
          />
        </div>
      </div>

      <div className="hero-img-container">
        <img
          src="https://placehold.co/519x600"
          alt="A picture of Samuel Oluwabusayo Amupitan"
        />
      </div>
    </section>
  );
}

export default Hero;
