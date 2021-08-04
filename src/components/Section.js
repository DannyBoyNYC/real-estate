import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "img/AbeSafa.jpg",
    thumbnail: "img/AbeSafa.jpg",
    originalHeight: "20px",
  },
  {
    original: "img/BrendonPayne.jpg",
    thumbnail: "img/BrendonPayne.jpg",
  },
  {
    original: "img/GregHarrelson.jpg",
    thumbnail: "img/GregHarrelson.jpg",
  },
  {
    original: "img/HunterBaiden.jpg",
    thumbnail: "img/HunterBaiden.jpg",
  },
  {
    original: "img/JoelBarber.jpg",
    thumbnail: "img/JoelBarber.jpg",
  },
  {
    original: "img/KevinMills.jpg",
    thumbnail: "img/KevinMills.jpg",
  },
];

// function renderLeftNav(onClick, disabled) {
//   return (
//     <button
//       className="image-gallery-custom-left-nav"
//       disabled={disabled}
//       onClick={onClick}
//     />
//   );
// }

// function renderRightNav(onClick, disabled) {
//   return (
//     <button
//       className="image-gallery-custom-right-nav"
//       disabled={disabled}
//       onClick={onClick}
//     />
//   );
// }

function Section() {
  return (
    <section id="section">
      <div className="gallery-container">
        <div className="gallery">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            autoPlay={true}
            // additionalClass="gallery-class"
            // renderLeftNav={renderLeftNav}
            // renderRightNav={renderRightNav}
          />
        </div>
        <div>
          <h2>Become A Listing Machine</h2>
          <p>
            Follow in the steps of the top listing agents in the country. Our
            coaching system has delivered results year after year and Agent
            after Agent. Here are some of our top listing agents who followed
            the coaching in our program and how many listings they took in one
            year. Yes, you read that right. This is how many listings in took in
            one year each.
          </p>
          <p>
            Joel Barber 280 Listings Taken • Kevin Mills 280 Listings Taken •
            Brendon Payne 155 Listings Taken • Abe Safa 145 Listings Taken •
            Greg Harrelson 170 Listings Taken • Hunter Baiden 100 Listings Taken
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;
