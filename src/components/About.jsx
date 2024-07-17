import Button from './Button';

function About() {
  return (
    <section className="about" id='about'>
      <h2>Get to know me</h2>

      <div className="about-container">
        <div className="about-img-container">
          <img
            src="https://placehold.co/348x429"
            alt="A picture of Samuel Oluwabusayo"
          />
        </div>

        <div className="about-text-container">
          <p>
            I implement user interface design and solve user problems with HTML,
            CSS AND Javascript. I have 2 years of making products that solve
            user problems and implementing responsive website. I implement user
            interface design and solve user problems with HTML, CSS AND
            Javascript. I have 2 years of making products that solve user
            problems and implementing responsive website.I implement user
            interface design and solve user problems with HTML, CSS AND
            Javascript. I have 2 years of making products that solve user
            problems and implementing responsive website.
          </p>

          <Button text="Contact me" />
        </div>
      </div>
    </section>
  );
}

export default About;