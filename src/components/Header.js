import ParticlesBg from "particles-bg";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
import Nav from "./Nav";

function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <header id="home">
      <ParticlesBg
        color="#555555"
        type="cobweb"
        bg={true}
        num={isTabletOrMobile ? "50" : "200"}
      />

      <Nav />

      <div className="row banner">
        <div className="banner-text">
          <AttentionSeeker effect="rubberBand" delay={3000}>
            <h2>It's All About Connections</h2>
          </AttentionSeeker>

          <Fade cascade duration={1000} delay={500}>
            <h1>Agent Success Academy</h1>
            <p>
              Connect on a weekly real estate agent coaching call from{" "}
              <strong>Greg Harrelson</strong> or <strong>Abe Safa</strong> to
              master the skills and techniques that top agents in the country
              are using, plus a whole lot more.
            </p>
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
            <div className="cta">
              <a
                href=" https://learningcenter.realestatesalessolutions.com/order?ct=1a5f66ca-bdef-4cf2-9bc4-5742bd78e5ce"
                className="button btn"
              >
                Subscribe $299 / month
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <p className="scroll-down">
        <a href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
