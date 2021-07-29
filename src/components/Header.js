import Fade from "react-reveal";
import ParticlesBg from "particles-bg";

import imgOne from "../img/outdoorhouseview.jpg";

function Header() {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: imgOne, // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.9, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#0000ff"],
    cross: "dead", // cross or bround
    random: 15, // or null,
    g: 5, // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };

  return (
    <header id="home">
      <ParticlesBg color="#dddddd" type="cobweb" bg={true} num="300" />

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
                fontFamily: "serif",
                fontSize: "2.5rem",
                letterSpacing: "4px",
              }}
            >
              ITS ALL ABOUT CONNECTIONS
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
              and master the skills and techniques that top agents in the
              country are using, plus a whole lot more
            </h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a
                style={{
                  backgroundColor: "yellow",
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
