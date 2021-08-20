import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";
import Nav from "./Nav";

function Header() {
  return (
    <header id="home">
      <ParticlesBg color="#555555" type="cobweb" bg={true} num="200" />

      <Nav />

      <div className="row banner">
        <div className="banner-text">
          <Fade>
            <h2>It's All About Connections</h2>
          </Fade>

          <Fade bottom duration={2000}>
            <h1>Agent Success Academy</h1>
          </Fade>

          <Fade bottom duration={3000}>
            <p>
              Connect on a weekly real estate agent coaching call from{" "}
              <strong>Greg Harrelson</strong> or <strong>Abe Safa</strong> to
              master the skills and techniques that top agents in the country
              are using, plus a whole lot more.
            </p>
          </Fade>

          <Fade bottom duration={4000}>
            <div className="image-container">
              <img
                src="https://res.cloudinary.com/deedee/image/upload/v1629379717/real-estate/agents/GregHarrelson.jpg"
                alt="Greg Harrelson"
              />
              <img
                src="https://res.cloudinary.com/deedee/image/upload/v1629382083/real-estate/agents/611e65c36bccb152ca9a5506.jpg"
                alt="Abe Safa"
              />
            </div>
          </Fade>

          <Fade bottom duration={4000}>
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
