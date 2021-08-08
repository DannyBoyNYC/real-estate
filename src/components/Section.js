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
            <span className="highlight">Become a Listing Machine</span>
          </h2>
          <p>
            Follow in the steps of the top listing agents in the country. Our
            coaching system has delivered results year after year and Agent
            after Agent.
          </p>
          <p>
            Here are some of our top listing agents who followed the coaching in
            our program and how many listings they took in one year.
          </p>
          <div className="taken">
            <ul>
              <li>
                <p>Joel Barber - 280 listings taken</p>
              </li>
              <li>
                <p>Kevin Mills - 280 listings taken</p>
              </li>
              <li>
                <p>Brendon Payne - 155 listings taken</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>Abe Safa - 145 listings taken</p>
              </li>
              <li>
                <p>Greg Harrelson - 170 listings taken</p>
              </li>
              <li>
                <p>Hunter Baiden - 100 listings taken</p>
              </li>
            </ul>
          </div>

          <p>
            <span className="highlight-inline">Yes, you read that right. </span>
            This is how many listings each took in one year.
          </p>
        </div>
      </div>
      <h3 className="special gallery-container">Here's what you get</h3>
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
            </p>
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
            </p>
            <p>
              <span className="highlight-inline">Powerful scripts</span> that we
              use and that work.
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
          </div>
        </Card>
        <Card>
          <div className="column">
            <h2>
              <span className="highlight">Beyond the Coaching</span>
            </h2>
            <p>
              <span className="highlight-inline">Archived</span> coaching
              library.
            </p>
            <p>
              <span className="highlight-inline">Monday</span> morning
              motivation video.{" "}
            </p>
            <p>
              <span className="highlight-inline">Get copies</span> of social
              media ads as we run them and archived ones.
            </p>
            <p>
              <span className="highlight-inline">Day to day</span> action steps
              that deliver results.
            </p>
          </div>
        </Card>
      </div>
      <h3 className="special gallery-container">
        Next level training for next level agents
      </h3>
      <div className="card coaching column gallery-container ">
        <h2>
          <span className="highlight">
            Coaching that works from Coaches who still work!
          </span>
        </h2>
        <ul>
          <li>
            <p>
              Master the listing presentation and how to handle any Buyer or
              Seller objection
            </p>
          </li>
          <li>
            <p>
              Master the pricing conversation and effective price reductions
            </p>
          </li>
          <li>
            <p>
              Text length of individual points can be shorter or longer
              depending on your needs
            </p>
          </li>
          <li>
            <p>Network and find role play partners</p>
          </li>
          <li>
            <p>Build referral relationships with agents across the country</p>
          </li>
          <li>
            <p>
              Learn how to build a Databank that you can tap into for deals at
              any time
            </p>
          </li>
          <li>
            <p>
              Learn and Master the conversations that will help you make deep
              connections with Sellers and Buyers improving your closing skills
            </p>
          </li>
          <li>
            <p>
              Learn about the best technologies in the industry and how to use
              them for maximum efficiency and results
            </p>
          </li>
          <li>
            <p>
              Learn how to master your morning and effective time management
            </p>
          </li>
          <li>
            <p>
              Learn how to take lots of listings from the Elite Listing Masters
              in the country
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Section;
