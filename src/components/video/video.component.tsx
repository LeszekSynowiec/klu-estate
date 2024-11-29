export function Video() {
    return (
        <video
            width="1920"
            height="1080"
            className="w-full h-full absolute top-0 left-0 z-0 object-cover"
            preload="auto"
            poster="/poster.webp"
            loop
            playsInline
            autoPlay
            muted
        >
            <source src="splash_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
