import cn from "classnames";

import CardTime from "@/components/card/time";
import CardSectionFiveLeft from "@/components/sections/magazine/card";
import CardSectionFiveMiddle from "@/components/sections/magazine/middle";
import { TitleTime } from "@/components/typography";

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
      <TitleTime title={title} />
      <div className="uOw">
        {right.map((item: any) => (
          <CardTime key={item.title} data={item} />
        ))}
      </div>
    </div>
  </div>
);

export default MagazineContent;
