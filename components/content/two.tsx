import { SubtitleTwo, Title2ContentTwo, TitleContentTwo } from "../typography";
import { Author, InputTwo, ItemImage } from "./items";
import cx from "classnames";
import { useState } from "react";

const ContentTwoCard = ({
  onClickHandler,
  num,
  label,
  data: {
    title,
    subtitle,
    author,
    image: { src },
    links,
  },
}: any) => {
  return (
    <>
      <label
        onClick={() => onClickHandler(num)}
        className="Efm"
        htmlFor="radio-0-161523780"
      >
        <div className="Xaa">{num}</div>
        <div className="Dlm">{label}</div>
      </label>
      <div className="iRG">
        <div className="mNi">
          <div className="IA_">
            <div className="wZQ">
              {links.map(({ title, href }: any) => (
                <ContentTwoTopCard key={title} data={{ title, href }} />
              ))}
            </div>
          </div>
          <a href="/style/danessa-myricks-interview" className="fz0">
            <div className="_yv"></div>
            <Title2ContentTwo>{title}</Title2ContentTwo>
            <div className="wd0">
              <SubtitleTwo>{subtitle}</SubtitleTwo>
              <Author data={author} />
            </div>
            <div className="yMG">
              <div className="vmZ Dsq">
                <ItemImage src={src} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

const ContentTwoTopCard = ({ data: { title, href } }: any) => (
  <a href={href} className="wLh">
    <TitleContentTwo>{title}</TitleContentTwo>
    <div className="_yv"></div>
  </a>
);

const CardLabel = ({ onClick, className, num, title, numIndex }: any) => (
  <label
    onClick={() => onClick(num)}
    className={cx(`${className} pDF`)}
    htmlFor={`radio-${numIndex}-161523780`}
  >
    <div className="Xaa">{num}</div>
    <div className="Dlm">{title}</div>
  </label>
);

export const ContentTwo = ({ data }: any) => {
  const [isChecked, setChecked] = useState("01");
  const onClickHandler = (e: any) => setChecked(e);
  return (
    <div>
      <div className="cCV">
        <div className="sWr card-161523780 EnW">
          <div className="A_V">
            <InputTwo onChecked={isChecked === "01"} className="Iv6" />
            <InputTwo onChecked={isChecked === "02"} className="c3V" />
            <InputTwo onChecked={isChecked === "03"} className="m_5" />
            <InputTwo onChecked={isChecked === "04"} className="jdg" />
            <div className="nig">
              {data.map(
                ({ mobileClassName, num, label }: any, index: number) => (
                  <CardLabel
                    onClick={onClickHandler}
                    key={index}
                    numIndex={index}
                    num={num}
                    className={mobileClassName}
                    title={label}
                  />
                )
              )}
            </div>
            <div className="brJ">
              {data.map(({ className, num, data, label }: any) => (
                <div key={className} className={cx(`moS ${className}`)}>
                  <ContentTwoCard
                    onClickHandler={onClickHandler}
                    num={num}
                    data={data}
                    label={label}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
