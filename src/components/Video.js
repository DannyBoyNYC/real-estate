export default function Video() {
  return (
    <div className="gallery-container">
      <h3 className="gallery-container special">Introduction Video</h3>
      <video
        className="flex"
        width="100%"
        height="100%"
        src="https://res.cloudinary.com/deedee/video/upload/v1629838052/real-estate/asa-sample.mp4"
        controls
      ></video>
    </div>
  );
}
