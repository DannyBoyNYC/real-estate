import Fade from "react-reveal";
import ParticlesBg from "particles-bg";

import imgOne from "../img/outdoorhouseview.jpg";

function Header() {
  return (
    <header>
      <ParticlesBg color="#555555" type="cobweb" bg={true} num="200" />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Why It Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Subscriber Login
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1
              className="responsive-headline"
              style={{
                fontSize: "2.5rem",
                letterSpacing: "4px",
              }}
            >
              ITS ABOUT CONNECTIONS
            </h1>
            <h1
              className="responsive-headline"
              style={{
                color: "yellow",
              }}
            >
              Agent Success Academy
            </h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3
              style={{
                fontFamily: "serif",
                fontSize: "2.5rem",
              }}
            >
              Connect on a weekly coaching call from Greg Harrelson or Abe Safa
              to master the skills and techniques that top agents in the country
              are using, plus a whole lot more.
            </h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a
                style={{
                  fontWeight: "bold",
                }}
                href="https://github.com/nordicgiant2/react-nice-resume"
                className="button btn project-btn"
              >
                Subscribe $299 / month
              </a>
            </ul>
          </Fade>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
