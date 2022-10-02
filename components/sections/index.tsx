/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import cx from "classnames";
import {
  CardHeadline,
  CardArticles,
  CardTime,
  SectionTwoContent,
  CardPoster,
  CardSectionFiveMiddle,
  CardSectionFiveLeft,
  CardSectionSixHeading,
  CardSectionSixPicture,
} from "../card";
import { InputRadio, ItemImage, Label } from "../items";
import { Section } from "../section";
import { sideScroll } from "../../utils/scroll";
import { TitleTime } from "../typography";
import {
  SectionPosterWrapper,
  SectionFiveHeading,
  ContentFiveMiddle,
  ContentSevenMiddle,
  SectionFiveWrapper,
} from "./partials";

export const SectionSpread = ({
  cardNum,
  data: { left, right, middle },
}: any) => (
  <Section cardNum={cardNum}>
    <div className="Zfw Rz_">
      <div className="f8u">
        <CardHeadline data={left} />
        <div className="net z4K">
          {right.map((item: any, index: number) => (
            <CardArticles key={index} data={item} />
          ))}
        </div>
        <div className="og9 lxG">
          <div className="uOw">
            {middle.map((item: any) => (
              <CardTime key={item.title} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export const SectionTwo = ({ data }: any) => {
  const [isChecked, setChecked] = useState("01");
  const onClick = (e: any) => setChecked(e);
  const onCheck = (number: string) => {
    return isChecked === number;
  };
  return (
    <Section cardNum={161523780}>
      <div className="A_V">
        <InputRadio onChecked={onCheck("01")} className="Iv6" />
        <InputRadio onChecked={onCheck("02")} className="c3V" />
        <InputRadio onChecked={onCheck("03")} className="m_5" />
        <InputRadio onChecked={onCheck("04")} className="jdg" />
        <div className="nig">
          {data.map(({ mobileClassName, num, label }: any, index: number) => (
            <Label
              onClick={onClick}
              key={index}
              numIndex={index}
              num={num}
              className={mobileClassName}
              title={label}
            />
          ))}
        </div>
        <div className="brJ">
          {data.map(({ className, num, data, label }: any) => (
            <div key={className} className={cx(`moS ${className}`)}>
              <SectionTwoContent
                onClick={onClick}
                num={num}
                data={data}
                label={label}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const SectionPosters = ({ data }: any) => {
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  return (
    <SectionPosterWrapper title="Bustle Originals">
      <button
        title="Previous page"
        className="odm m8M"
        tabIndex={-1}
        disabled={true}
      />
      <button
        title="Next page"
        className="odm xR8"
        tabIndex={-1}
        onClick={() => {
          sideScroll(contentWrapper?.current, 25, 100, 720);
        }}
      />
      <div className="yTZ" ref={contentWrapper}>
        <div className="bVG"></div>
        {data.map((item: any, index: number) => (
          <CardPoster key={index} data={item} />
        ))}
        <div className="Nyt pzW"></div>
        <div className="bVG"></div>
      </div>
    </SectionPosterWrapper>
  );
};

export const SectionFour = ({ data: { title, image } }: any) => (
  <Section cardNum={161523785}>
    <div className="T8A">
      <div className="gsz G2w">
        <header className="KfF">
          <div className="Psy gnY"></div>
          <h1 className="aVX Kca IhL uFd">{title}</h1>
          <div className="r87 dYp">
            <p>
              <a href="https://www.bustle.com/health-wellness-issue-2022">
                <strong>Read more</strong>
              </a>
            </p>
          </div>
        </header>
        <div className="u4k">
          <div className="vmZ oL7 YOh">
            <ItemImage image={image} className="fpC XBl" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export const SectionFive = ({ data }: any) => (
  <Section cardNum={161523772}>
    <SectionFiveWrapper>
      <SectionFiveHeading className="Egy" title="Entertainment" />
      <ContentFiveMiddle
        title="Celebrity News"
        data={data}
        orderTime="QXt"
        orderArticles="GY8"
        orderHeading="uji"
      />
    </SectionFiveWrapper>
  </Section>
);

export const SectionSix = ({ data: { content, picture } }: any) => (
  <Section cardNum={161523787}>
    <div className="w9K Mnx">
      <div className="mRp">
        <a
          href="/style/how-the-all-new-genesis-g90-takes-korean-design-to-an-audacious-new-level"
          className="Hof"
        ></a>
        <div className="rHN cCV">
          <div className="sWr">
            <div className="cUF">
              <div className="gsz fQd">
                <CardSectionSixHeading data={content} />
                <CardSectionSixPicture data={picture} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);



export const SectionSeven = ({ data }: any) => (
  <Section cardNum={161523773}>
    <SectionFiveWrapper>
      <SectionFiveHeading title="Style" />
      <ContentFiveMiddle
        title="Beauty News"
        data={data}
        orderTime="yHP"
        orderArticles="Kf6"
        orderHeading="FpW"
      />
    </SectionFiveWrapper>
  </Section>
);
