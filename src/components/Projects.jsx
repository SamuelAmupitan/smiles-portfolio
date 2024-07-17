/** @format */

function Projects() {
  const projects = [
    {
      name: 'Eco Shop',
      image: 'https://placehold.co/395x395',
      languages: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/eco-shop',
      hostedUrl: 'eco-shop-bay.vercel.com',
    },
    {
      name: 'Eco Shop',
      image: 'https://placehold.co/395x395',
      languages: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/eco-shop',
      hostedUrl: 'eco-shop-bay.vercel.com',
    },
    {
      name: 'Eco Shop',
      image: 'https://placehold.co/395x395',
      languages: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/eco-shop',
      hostedUrl: 'eco-shop-bay.vercel.com',
    },
    // {
    //   name: 'Eco Shop',
    //   image: 'https://placehold.co/395x395',
    //   languages: ['HTML', 'CSS', 'JavaScript'],
    //   githubUrl: 'https://github.com/eco-shop',
    //   hostedUrl: 'eco-shop-bay.vercel.com',
    // },
    // {
    //   name: 'Eco Shop',
    //   image: 'https://placehold.co/395x395',
    //   languages: ['HTML', 'CSS'],
    //   githubUrl: 'https://github.com/eco-shop',
    //   hostedUrl: 'eco-shop-bay.vercel.com',
    // },
    // {
    //   name: 'Eco Shop',
    //   image: 'https://placehold.co/395x395',
    //   languages: ['HTML', 'CSS', 'JavaScript'],
    //   githubUrl: 'https://github.com/eco-shop',
    //   hostedUrl: 'eco-shop-bay.vercel.com',
    // },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.name} className="project">
            <div className="project-img-container">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-info-container">
              <h3>{project.name}</h3>
              <div className="project-language">
                {project.languages.map((language) => (
                  <p key={language} className="language">
                    {language}{' '}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
