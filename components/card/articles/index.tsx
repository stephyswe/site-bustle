import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import Typography from "@/components/items/typography";

const CardArticles = ({
  data: { style, tag, title, subtitle, href, image, author },
}: any) => (
  <a href={href} className="MKc p-W">
    <div className="O-E cNR">
      <div style={style} className="vmZ tW7 ap2">
        <ItemImage sizesNum="196" image={image} />
      </div>
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
  </a>
);

export default CardArticles;
