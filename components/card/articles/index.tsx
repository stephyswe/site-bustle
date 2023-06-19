import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import { Subtitle, Tag, Title } from "@/components/typography";

const CardArticles = ({
  data: { style, tag, title, subtitle, href, image, author },
}: any) => (
  <a href={href} className="MKc p-W">
    <div className="O-E cNR">
      <div style={style} className="vmZ tW7 ap2">
        <ItemImage sizesNum="196" image={image} />
      </div>
    </div>
    <Tag>{tag}</Tag>
    <Title>{title}</Title>
    <div className="Q9i mp_">
      <Subtitle>{subtitle}</Subtitle>
      <Author data={author} />
    </div>
  </a>
);

export default CardArticles;
