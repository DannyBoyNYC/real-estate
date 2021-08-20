import Carousel from "./Carousel";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

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
        <Fade bottom duration={2000}>
          <Card>
            <div className="column">
              <h2>
                <span className="highlight">
                  Personal Coaching Communication
                </span>
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
                <span className="highlight-inline">
                  Quarterly business planning call
                </span>{" "}
                along with a step by step business plan.
              </p>
            </div>
          </Card>
        </Fade>
        <Fade bottom duration={2000}>
          <Card>
            <div className="column">
              <h2>
                <span className="highlight">Powerful Tools and Automation</span>
              </h2>

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
            </div>
          </Card>
        </Fade>
        <Fade bottom duration={2000}>
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
                media ads as we run them - as well as archived ones.
              </p>
              <p>
                <span className="highlight-inline">Day to day</span> action
                steps that deliver results.
              </p>
            </div>
          </Card>
        </Fade>
      </div>
      <h3 className="special gallery-container">
        Next level training for next level agents
      </h3>
      <Fade bottom duration={2000}>
        <div className="card coaching column gallery-container ">
          <h2>
            <span className="highlight">
              Coaching that works from Coaches who still work!
            </span>
          </h2>
          <ul>
            <li>
              <p>
                Master the listing presentation and increase your appointment to
                listing taken ratio
              </p>
            </li>
            <li>
              <p>
                Master the pricing conversation to take well priced listings
              </p>
            </li>
            <li>
              <p>
                Join a top producer network and find committed role play
                partners
              </p>
            </li>
            <li>
              <p>
                Turn your database to a databank - time to have sellers call you
              </p>
            </li>
            <li>
              <p>
                Learn how to build a Databank that you can tap into for deals at
                any time
              </p>
            </li>
            <li>
              <p>
                Learn the dialogues that create deeper connections and higher
                conversions
              </p>
            </li>
            <li>
              <p>
                Know the best tech to leverage and how to turn tech into revenue
              </p>
            </li>
            <li>
              <p>
                Learn how to master your morning and effective time management
              </p>
            </li>
            <li>
              <p>
                Learn how to take more listings each month by leveraging the
                strategies of the country's elite listers
              </p>
            </li>
          </ul>
        </div>
      </Fade>
      <h3 className="special gallery-container">Sample Topics</h3>
      <Fade bottom duration={2000}>
        <div className="card coaching column gallery-container ">
          <h2>
            <span className="highlight">A New Topic Every Week...</span>
          </h2>
          <ul>
            <li>
              <p>Free Listing Leads - The Referral Sources Of Top Agents</p>
            </li>
            <li>
              <p>
                Come List Me Calls - How to create The Databank of your Dreams
              </p>
            </li>
            <li>
              <p>Fantical Follow Up - Stop Losing Opportunities</p>
            </li>
            <li>
              <p>Creating A Predictable and Duplicatable Business</p>
            </li>
            <li>
              <p>
                Be The Shift In Your Market - How To Grow In a Changing Market
              </p>
            </li>
            <li>
              <p>Your Daily Blueprint - The Plan Of Champions</p>
            </li>
            <li>
              <p>Winning Listings In A Competitive Market</p>
            </li>
            <li>
              <p>Build Wealth One FSBO At A Time</p>
            </li>
            <li>
              <p>Crush Their Objections - How To Overcome Every Objection</p>
            </li>
          </ul>
        </div>
      </Fade>
    </section>
  );
}

export default Section;
