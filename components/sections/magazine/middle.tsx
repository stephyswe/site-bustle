import cn from "classnames";

import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import Typography from "@/components/items/typography";

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
    <Typography type="title" variant="default" className="k84">
      {title}
    </Typography>
    <div className="Q9i PN2">
      <Typography type="subtitle" variant="default" className="Qeh">
        {subtitle}
      </Typography>
      <Author className="xaa" data={author} />
    </div>
  </a>
);

export default CardSectionFiveMiddle;
