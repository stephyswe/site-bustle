import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import { Video } from "@/components/items/video";
import { Tag, Title } from "@/components/typography";

const CardSectionFiveLeft = ({
  data: { author, style, href, title, subtitle, image, videoSrc, tag },
}: any) => (
  <a className="MKc NEA" href={href}>
    <div className="O-E ACN">
      {image?.src ? (
        <div className="vmZ tW7 ap2" style={style}>
          <ItemImage overwriteCompress="216b" image={image} />
        </div>
      ) : null}
      {videoSrc ? <Video className="tW7" videoSrc={videoSrc} /> : null}
    </div>
    <Tag className="R-A">{tag}</Tag>
    <Title className="k84">{title}</Title>

    <div className="Q9i PN2">
      <p className="NNe Qeh">{subtitle}</p>
      {author ? <Author className="xaa" data={author} /> : null}
    </div>
  </a>
);

export default CardSectionFiveLeft;
