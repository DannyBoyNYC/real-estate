export default function Video() {
  return (
    <div className="gallery-container">
      <h3 className="gallery-container special">An Actual Coaching Call </h3>
      <video
        poster="https://res.cloudinary.com/deedee/image/upload/v1631468707/real-estate/greg-call.png"
        className="flex"
        width="100%"
        height="100%"
        src="https://videoproxy-production.s3.amazonaws.com/brlu68cobr2ovliojhpg/c4rs2t4fv9nbav2hp7bg/c4rs2t4fv9nbav2hp7bg.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIUQLRXLUOYMIIHEQ%2F20210912%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210912T173418Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=d5b4a11eafb06a8a80b8ec0b15b729757a236b7e2b85661ef93d9b19b4ec69ea"
        controls
      ></video>
    </div>
  );
}
