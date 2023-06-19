import cn from "classnames";

import CardTime from "@/components/card/time";
import Typography from "@/components/items/typography";
import CardSectionFiveLeft from "@/components/sections/magazine/card";
import CardSectionFiveMiddle from "@/components/sections/magazine/middle";

const MagazineContent = ({
  title,
  orderHeading,
  orderArticles,
  orderTime,
  data: { left, right, middle },
}: any) => (
  <div className="f8u">
    <CardSectionFiveMiddle data={middle} orderHeading={orderHeading} />
    <div className={cn(`net ${orderArticles}`)}>
      {left.map((item: any) => (
        <CardSectionFiveLeft key={item.title} data={item} />
      ))}
    </div>
    <div className={cn(`og9 ${orderTime}`)}>
      <Typography type="title" variant="time">
        {title}
      </Typography>
      <div className="uOw">
        {right.map((item: any) => (
          <CardTime key={item.title} data={item} />
        ))}
      </div>
    </div>
  </div>
);

export default MagazineContent;
