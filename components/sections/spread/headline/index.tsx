import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import BustleLink from "@/components/items/link";
import Typography from "@/components/items/typography";
import { Video } from "@/components/items/video";

const VideoOrImage = ({ image, videoSrc, videoParentStyle }: any) => {
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
      <div style={{ paddingTop: "100%" }} className="vmZ tW7 ap2">
        <ItemImage image={image} sizesNum="374" />
      </div>
    );
  }
};

const CardHeadline = ({
  data: { image, title, subtitle, author, href, videoSrc },
}: any) => (
  <BustleLink href={href} className="Fh8 PYF">
    <div className="O-E cNR">
      <VideoOrImage
        image={image}
        videoSrc={videoSrc}
        videoParentStyle={{ paddingTop: "107.356%" }}
      />
    </div>
    <div className="Trd"></div>
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
