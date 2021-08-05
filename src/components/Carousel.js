import React from "react";

import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="img/JoelBarber.jpg" alt="Joel Barber" />
            <h3>Joel Barber 280 Listings Taken</h3>
          </div>
          <div>
            <img src="img/KevinMills.jpg" alt="Kevin Mills" />
            <h3>Kevin Mills 280 Listings Taken</h3>
          </div>
          <div>
            <img src="img/BrendonPayne.jpg" alt="Brendon Payne" />
            <h3>Brendon Payne 155 Listings Taken</h3>
          </div>
          <div>
            <img src="img/AbeSafa.jpg" alt="Abe Safa" />
            <h3>Abe Safa 145 Listings Taken</h3>
          </div>
          <div>
            <img src="img/GregHarrelson.jpg" alt="Greg Harrelson" />
            <h3>Greg Harrelson 170 Listings Taken</h3>
          </div>
          <div>
            <img src="img/HunterBaiden.jpg" alt="Hunter Baiden" />
            <h3>Hunter Baiden 100 Listings Taken</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
