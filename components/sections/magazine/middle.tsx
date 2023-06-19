import cn from "classnames";

import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import { Subtitle, Title } from "@/components/typography";

const CardSectionFiveMiddle = ({
  orderHeading,
  data: { subtitle, title, href, style, author, image },
}: any) => (
  <a className={cn(`Fh8 ${orderHeading}`)} href={href}>
    <div className="O-E ACN">
      <div className="vmZ tW7 ap2" style={style}>
        <ItemImage image={image} sizesNum="374" overwriteCompress="492" />
      </div>
    </div>
    <div className="Trd"></div>
    <Title className="k84">{title}</Title>
    <div className="Q9i PN2">
      <Subtitle className="Qeh">{subtitle}</Subtitle>
      <Author className="xaa" data={author} />
    </div>
  </a>
);

export default CardSectionFiveMiddle;
