import cn from "classnames";

export const Video = ({
  parentStyle,
  childClassName,
  className,
  videoSrc,
}: any) => (
  <div className={cn("Rfb", className)} style={parentStyle}>
    <video
      autoPlay={true}
      className={cn("kOK", childClassName)}
      loop={true}
      playsInline={false}
    >
      <source src={videoSrc} />
    </video>
  </div>
);
