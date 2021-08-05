import ParticlesBg from "particles-bg";
import { Fade, Bounce } from "react-awesome-reveal";

function Header() {
  return (
    <header id="home">
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#section">About</a>
          </li>
          <li>
            <a href="#portfolio">Why It Works</a>
          </li>
          <li>
            <a href="#resume">Subscriber Login</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Bounce>
            <h2>It's All About Connections</h2>
          </Bounce>

          <Fade bottom duration={2000}>
            <h1>Agent Success Academy</h1>
          </Fade>

          <Fade bottom duration={3000}>
            <p>
              Connect on a weekly coaching call from Greg Harrelson or Abe Safa
              to master the skills and techniques that top agents in the country
              are using, plus a whole lot more.
            </p>
          </Fade>

          <Fade bottom duration={2000}>
            <div className="cta">
              <a href="#section" className="button btn">
                Subscribe $299 / month
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <p className="scroll-down">
        <a href="#section">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
