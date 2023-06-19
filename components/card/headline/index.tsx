import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import { Subtitle, Title } from "@/components/typography";

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
    <Title>{title}</Title>
    <div className="Q9i mp_">
      <Subtitle>{subtitle}</Subtitle>
      <Author data={author} />
    </div>
  </a>
);

export default CardHeadline;
