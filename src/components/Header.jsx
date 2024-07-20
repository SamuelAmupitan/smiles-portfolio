/** @format */
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="web-header">
        <nav className="web-nav">
          <h2>SmilesTech</h2>

          <ul className="web-nav-list">
            <li>
              <a href="/" target="_self" rel="noopener">
                Home
              </a>
            </li>
            <li>
              <a href="#about" target="_self" rel="noopener">
                About
              </a>
            </li>
            <li>
              <a href="#projects" target="_self" rel="noopener">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" target="_self" rel="noopener">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://amupitansamuel.hashnode.dev/my-journey-with-react-and-vue-a-personal-exploration-and-comparison"
                target="_blank"
                rel="noopener"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        <nav className="mobile-nav">
          <h2>SmilesTech</h2>
          <button onClick={toggleMenu}>
            {isOpen ? <HiOutlineXMark className='x' /> : <HiBars3 className="bars" />}
          </button>
        </nav>

        {isOpen && (
          <ul className="mobile-nav-list">
            <li>
              <a href="/" target="_self" rel="noopener">
                Home
              </a>
            </li>
            <li>
              <a href="#about" target="_self" rel="noopener">
                About
              </a>
            </li>
            <li>
              <a href="#projects" target="_self" rel="noopener">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" target="_self" rel="noopener">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://amupitansamuel.hashnode.dev/my-journey-with-react-and-vue-a-personal-exploration-and-comparison"
                target="_blank"
                rel="noopener"
              >
                Blog
              </a>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;
