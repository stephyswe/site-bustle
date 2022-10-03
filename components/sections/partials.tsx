import { CardSectionFiveMiddle, CardSectionFiveLeft, CardTime } from "../card";
import { Section } from "../section";
import { TitleTime } from "../typography";
import cx from "classnames";

export const SectionPosterWrapper = ({ title, children }: any) => (
  <Section cardNum={161523782}>
    <div className="bw8 TPM THO">
      <div className="de0">
        <div className="b3H">
          <div className="Mtx">
            <p>
              <a href="https://www.bustle.com/originals">{title}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="Uz3">{children}</div>
    </div>
  </Section>
);

export const SectionMagazineHeading = ({ className, title }: any) => (
  <div className={cx(`ops ${className}`)}>
    <a href="/entertainment">
      <div className="CJo">
        <p>{title}</p>
      </div>
    </a>
  </div>
);

export const ContentFiveMiddle = ({
  title,
  orderHeading,
  orderArticles,
  orderTime,
  data: { left, right, middle },
}: any) => (
  <div className="f8u">
    <CardSectionFiveMiddle data={middle} orderHeading={orderHeading} />
    <div className={cx(`net ${orderArticles}`)}>
      {left.map((item: any) => (
        <CardSectionFiveLeft key={item.title} data={item} />
      ))}
    </div>
    <div className={cx(`og9 ${orderTime}`)}>
      <TitleTime title={title} />
      <div className="uOw">
        {right.map((item: any) => (
          <CardTime key={item.title} data={item} />
        ))}
      </div>
    </div>
  </div>
);

export const SectionFiveWrapper = ({ children }: any) => (
  <div className="w9K">
    <div className="mRp">
      <div className="rHN cCV">
        <div className="sWr">
          <div className="Zfw">{children}</div>
        </div>
      </div>
    </div>
  </div>
);
