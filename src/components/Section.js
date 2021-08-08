import Carousel from "./Carousel";
import Card from "./Card";

function Section() {
  return (
    <section id="section">
      <div className="gallery-container card">
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
            <span className="highlight-inline">Yes, you read that right. </span>
            This is how many listings each took in one year.
          </p>
        </div>
      </div>
      <h3 className="special gallery-container">What you get</h3>
      <div className="card-container">
        <Card>
          <div className="column">
            <h2>
              <span className="highlight">Personal Coaching Communication</span>
            </h2>
            <p>
              <span className="highlight-inline">Coaching on demand</span>{" "}
              &mdash; access to Greg and Abe via text or email.{" "}
              <em>Ask a question and get an answer within 24 hours.</em>
              <p>
                <span className="highlight-inline">Weekly</span> live group
                coaching call.
              </p>
              <p>
                <span className="highlight-inline">Daily</span> text pep talk or
                tip.
              </p>
              <p>
                <span className="highlight-inline">Quarterly</span> business
                planning call along with a step by step business plan.
              </p>
            </p>
          </div>
        </Card>
        <Card>
          <div className="column">
            <h2>
              <span className="highlight">Powerful Tools and Automation</span>
            </h2>
            <p>
              <span className="highlight-inline">
                Quarterly business planning call
              </span>{" "}
              along with a step by step business plan.
              <p>
                <span className="highlight-inline">Powerful scripts</span> that
                we use and that work.
              </p>
              <p>
                <span className="highlight-inline">Prospecting</span> numbers
                analyzer.
              </p>
              <p>
                <span className="highlight-inline">Quarterly Seller</span>{" "}
                automation campaigns to get listings.
              </p>
              <p>
                <span className="highlight-inline">Quarterly Buyer</span>{" "}
                automation campaigns to re-engage Buyer leads.
              </p>
            </p>
          </div>
        </Card>
        <Card>
          <div className="column">
            <h2>
              <span className="highlight">Beyond The Coaching</span>
            </h2>
            <p>
              <span className="highlight-inline">Archived</span> coaching
              library.
              <p>
                <span className="highlight-inline">Monday</span> morning
                motivation video.{" "}
              </p>
              <p>
                <span className="highlight-inline">Get copies</span> of social
                media ads as we run them and archived ones.
              </p>
              <p>
                <span className="highlight-inline">Day to day</span> action
                steps that deliver results.
              </p>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Section;
