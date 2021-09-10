export default function Video() {
  return (
    <div className="gallery-container">
      <h3 className="gallery-container special">Introduction Video</h3>
      <video
        poster="https://res.cloudinary.com/deedee/image/upload/v1631295956/real-estate/video-poster.png"
        className="flex"
        width="100%"
        height="100%"
        src="https://res.cloudinary.com/deedee/video/upload/v1629838052/real-estate/asa-sample.mp4"
        controls
      ></video>
    </div>
  );
}
