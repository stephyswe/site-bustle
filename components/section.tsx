import cx from "classnames";

type SectionProps = {
  cardNum: number;
  moreContent?: any;
  children: any;
};

export const Section = ({ cardNum, moreContent, children }: SectionProps) => (
  <div>
    <div className="cCW">
      <div className={cx(`sWr card-${cardNum} EnW`)}>
        {children}
        {moreContent}
      </div>
    </div>
  </div>
);
