import Carousel from "./Carousel";

function Section() {
  return (
    <section id="section">
      <div className="gallery-container">
        <div className="gallery">
          <Carousel />
        </div>

        <div>
          <h2>
            <span className="highlight">Become A Listing Machine</span>
          </h2>
          <p>
            Follow in the steps of the top listing agents in the country. Our
            coaching system has delivered results year after year and Agent
            after Agent.
          </p>
          <p>
            Here are some of our top listing agents who followed the coaching in
            our program and how many listings they took in one year.{" "}
            <strong style={{ color: "#ffc600" }}>
              Yes, you read that right.{" "}
            </strong>
            This is how many listings in took in one year each.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;
