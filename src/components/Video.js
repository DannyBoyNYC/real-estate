export default function Video() {
  return (
    <div className="gallery-container">
      <h3 className="gallery-container special">Actual Coaching Call Sample</h3>
      <video
        poster="https://res.cloudinary.com/deedee/image/upload/v1631468707/real-estate/greg-call.png"
        className="flex"
        width="100%"
        height="100%"
        src="https://res.cloudinary.com/deedee/video/upload/v1631742671/real-estate/asa-3.mp4"
        controls
      ></video>
    </div>
  );
}
