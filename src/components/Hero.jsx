import Button from './Button';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text-container">
        <h2>Samuel Amupitan</h2>
        <h1>Frontend Developer</h1>
        <p>
          I implement user interface design and solve user problems with HTML,
          CSS and JavaScript. I have 2 years of making products that solve user
          problems and implementing responsive design
        </p>

        <Button text="Contact me" />
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