import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import Typography from "@/components/items/typography";

const CardHeadline = ({
  data: { image, title, subtitle, author, href },
}: any) => (
  <a href={href} className="Fh8 PYF">
    <div className="O-E cNR">
      <div style={{ paddingTop: "100%" }} className="vmZ tW7 ap2">
        <ItemImage image={image} sizesNum="374" />
      </div>
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
  </a>
);

export default CardHeadline;
