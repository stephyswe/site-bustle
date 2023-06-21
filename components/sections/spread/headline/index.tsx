import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import { ItemNewImage } from "@/components/items/image";
import BustleLink from "@/components/items/link";
import Typography from "@/components/items/typography";
import { Video } from "@/components/items/video";

export const VideoOrImage = ({
  image,
  videoSrc,
  videoParentStyle,
  imageParentStyle,
}: any) => {
  if (videoSrc) {
    return (
      <Video
        className="tW7 sMW"
        childClassName="U-k"
        videoSrc={videoSrc}
        parentStyle={videoParentStyle}
      />
    );
  } else {
    return (
      <div style={imageParentStyle} className="vmZ tW7 ap2">
        <ItemNewImage image={image} />
      </div>
    );
  }
};

const CardHeadline = ({
  data: { image, title, subtitle, author, href, videoSrc, tag },
}: any) => (
  <BustleLink href={href} className="Fh8 PYF">
    <div className="O-E cNR">
      <VideoOrImage
        image={image}
        videoSrc={videoSrc}
        videoParentStyle={{ paddingTop: "107.356%" }}
      />
    </div>
    <Typography type="tag" variant="default">
      {tag}
    </Typography>
    <Typography type="title" variant="default">
      {title}
    </Typography>
    <div className="Q9i mp_">
      <Typography type="subtitle" variant="default">
        {subtitle}
      </Typography>
      <Author data={author} />
    </div>
  </BustleLink>
);

export default CardHeadline;
