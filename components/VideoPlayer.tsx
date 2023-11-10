const VideoPlayer = ({ location }: { location: string }) => {

  return (
    <>
      <video
        id="my-video"
        className="video-js absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        controls
        preload="auto"
        data-setup="{}"
      >
        <source src={location} type="video/mp4" />
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
    </>
  );
};

export default VideoPlayer;
