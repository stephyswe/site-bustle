import cn from "classnames";

export const Video = ({ className, videoSrc }: any) => (
  <div className={cn(`Rfb ${className}`)}>
    <video autoPlay={true} className="kOK" loop={true} playsInline={false}>
      <source src={videoSrc} />
    </video>
  </div>
);
