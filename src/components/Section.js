import Carousel from "./Carousel";
import Card from "./Card";
import Quote from "./Quote";
import Video from "./Video";
import { Fade } from "react-awesome-reveal";

import logo from "../img/Ress-logo-white.svg";

function Section() {
  return (
    <section id="about">
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
                <p>Joel Barber - 278 listings taken</p>
              </li>
              <li>
                <p>Kevin Mills - 295 listings taken</p>
              </li>
              <li>
                <p>Brendon Payne - 132 listings taken</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>Abe Safa - 125 listings taken</p>
              </li>
              <li>
                <p>Greg Harrelson - 176 listings taken</p>
              </li>
              <li>
                <p>Hunter Baiden - 124 listings taken</p>
              </li>
            </ul>
          </div>

          <p>
            <span className="highlight-inline">Yes, you read that right. </span>
            This is how many listings each took in one year.
          </p>
        </div>
      </div>

      <h3 className="gallery-container special ">Here's what you get</h3>
      <div className="card-container">
        <Fade cascade duration={1000} delay={500}>
          <Card>
            <div>
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

          <Card>
            <div>
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

          <Card>
            <div>
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
      <h3 className="gallery-container special ">
        Next level training for next level agents
      </h3>

      <div className="gallery-container card coaching column">
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
            <p>Master the pricing conversation to take well priced listings</p>
          </li>
          <li>
            <p>
              Join a top producer network and find committed role play partners
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

      <h3 className="special gallery-container">Sample Topics</h3>

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

      <Video />

      <Quote>
        <h3 className="gallery-container special ">
          What people are saying about Abe and Greg
        </h3>

        <div className="gallery-container">
          <blockquote>
            <p>
              <span className="highlight-inline title">
                Abe Safa out delivered...
              </span>
              The moment a colleague, mentioned that Abe, was going to expose
              his system I immediately signed up...what Abe has been able to
              create for himself in his career, there's not question why not to
              learn from him... If you want to be successful, learn from those
              that have done it before you, this is your opportunity to learn
              from a top producing agent... Abe out delivered, he exposed his
              system and approach to building a pipeline and how to structure
              yourself to follow up... Follow up is the meat of your
              business...and Abe shows how it is done.
            </p>
            <cite>Jose Sosa</cite>
          </blockquote>
        </div>

        <div className="gallery-container">
          <blockquote>
            <p>
              <span className="highlight-inline title">
                Everyone should take this course on day 1
              </span>
              This course is phenomenal. I wish I could have done it on day 1
              when I got into the business. I'm so thankful for abe safa making
              this course because he had solutions for everything I was running
              into. I can't wait to do an updated review once I start converting
              using his process
            </p>
            <cite>Mark Barrett</cite>
          </blockquote>
        </div>

        <div className="gallery-container">
          <blockquote>
            <p>
              <span className="highlight-inline title">
                Fanatical Follow Up!
              </span>
              This Course is worth every penny! So much Value packed in this
              core it’s unreal.
            </p>
            <cite>Darryl Dunn</cite>
          </blockquote>
        </div>

        <div className="gallery-container">
          <blockquote>
            <p>
              <span className="highlight-inline title">
                A simple system that works!
              </span>
              I highly recommend you check out this course! I have learned the
              simple follow up system of a TOP PRODUCER. I have gained insight
              that would normally take years to learn. I am going back again and
              again as there is so much GOLD to be learned in this FOLLOW UP
              Course. 11/10.
            </p>
            <cite>Jim Recinos</cite>
          </blockquote>
        </div>

        <div className="gallery-container">
          <blockquote>
            <p>
              <span className="highlight-inline title">The Kickoff</span>
              The kick off has been a great help in keeping me motivated and
              accountable to keep my business moving forward. It was the perfect
              continuation from the Redzone. Dec I was top sales agent in my
              office, Jan. I was top producing agent in my office, and in Feb. I
              was top listing agent in my office. I know Greg's course played a
              larger roll!
            </p>
            <cite>Tom Tussing</cite>
          </blockquote>
        </div>
      </Quote>

      <div
        className="cta"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <a
          href=" https://learningcenter.realestatesalessolutions.com/order?ct=1a5f66ca-bdef-4cf2-9bc4-5742bd78e5ce"
          className="button btn"
        >
          Subscribe $299 / month
        </a>
      </div>

      <div style={{ width: "300px", margin: "4rem auto" }}>
        <a href="https://www.realestatesalessolutions.com/">
          <img src={logo} alt="Real Estate Sales Solutions logo" />
        </a>
      </div>
    </section>
  );
}

export default Section;
