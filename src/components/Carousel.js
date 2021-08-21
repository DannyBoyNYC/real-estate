import React from "react";

import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      useTransform: true,
      // centerMode: true,
      // className: "slider variable-width",w
      cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      // <div>
      <Slider {...settings}>
        <figure>
          <img src="img/JoelBarber.jpg" alt="Joel Barber" />
          <figcaption className="highlight">
            Joel Barber 280 Listings Taken
          </figcaption>
        </figure>
        <figure>
          <img src="img/KevinMills.jpg" alt="Kevin Mills" />
          <figcaption className="highlight">
            Kevin Mills 280 Listings Taken
          </figcaption>
        </figure>
        <figure>
          <img src="img/BrendonPayne.jpg" alt="Brendon Payne" />
          <figcaption className="highlight">
            Brendon Payne 155 Listings Taken
          </figcaption>
        </figure>
        <figure>
          <img src="img/AbeSafa.jpg" alt="Abe Safa" />
          <figcaption className="highlight">
            Abe Safa 145 Listings Taken
          </figcaption>
        </figure>
        <figure>
          <img src="img/GregHarrelson.jpg" alt="Greg Harrelson" />
          <figcaption className="highlight">
            Greg Harrelson 170 Listings Taken
          </figcaption>
        </figure>
        <figure>
          <img src="img/HunterBaiden.jpg" alt="Hunter Baiden" />
          <figcaption className="highlight">
            Hunter Baiden 100 Listings Taken
          </figcaption>
        </figure>
      </Slider>
      // </div>
    );
  }
}

export default SimpleSlider;
