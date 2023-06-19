import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import Typography from "@/components/items/typography";
import { Video } from "@/components/items/video";

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
    <Typography type="tag" variant="default">
      {tag}
    </Typography>
    <Typography type="title" variant="default" className="k84">
      {title}
    </Typography>

    <div className="Q9i PN2">
      <p className="NNe Qeh">{subtitle}</p>
      {author ? <Author className="xaa" data={author} /> : null}
    </div>
  </a>
);

export default CardSectionFiveLeft;
