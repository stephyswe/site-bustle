import { Fragment, useRef } from "react";
import { urlSite } from "../../constants/data";
import { Section } from "../section";
import { TagTwo } from "../typography";
import { ItemImage } from "./items";

/* eslint-disable @next/next/no-img-element */
export const ContentThree = ({ data }: any) => {
  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  return (
    <ContentThreeWrapper title="Bustle Originals">
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
          <Fragment key={index}>
            <ContentThreeCard data={item} />
          </Fragment>
        ))}
        <div className="Nyt pzW"></div>
        <div className="bVG"></div>
      </div>
    </ContentThreeWrapper>
  );
};

const ContentThreeCard = ({
  data: {
    tag,
    title,
    image: { src },
  },
}: any) => {
  return (
    <a href="/entertainment/shania-twain-new-album-tour" className="AYM L_P">
      <div className="f_s L9Q">
        <div className="vmZ KlX">
          <ItemImage
            src={
              urlSite +
              src +
              "?w=240&fit=crop&crop=faces&auto=format%2Ccompress"
            }
          />
        </div>
      </div>
      <div className="Epy">
        <div className="nRE">{tag ? <TagTwo>{tag}</TagTwo> : null}</div>
        <p className="r0U G97">{title}</p>
      </div>
      <div className="ctC">
        <p className="DTp">
          How Shania Twain found love, her voice, and her rightful place in the
          pop music pantheon.
        </p>
        <div className="lFD">
          <span>By </span>
          <span className="NUu">Lindsay Zoladz</span>,{" "}
          <span className="NUu">Beau Grealy</span> and{" "}
          <span className="NUu">Tiffany Reid</span>
        </div>
      </div>
    </a>
  );
};

const ContentThreeWrapper = ({ title, children }: any) => (
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
