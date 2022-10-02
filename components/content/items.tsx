import { Fragment } from "react";
import cx from "classnames";
import { urlSite } from "../../constants/data";

/* eslint-disable @next/next/no-img-element */
export const Author = ({ data, className = "AGA" }: any) => (
  <div className={cx(`lFD ${className}`)}>
    <span>By </span>
    {data.map((item: any, index: number) => {
      const isBetween = index < data.length - 2;
      const secondLast = index === data.length - 2;
      return (
        <Fragment key={index}>
          <span className="NUu">{item}</span>
          {isBetween && ", "}
          {secondLast && " and "}
        </Fragment>
      );
    })}
  </div>
);

function handleSizes(sizes: any) {
  switch (sizes) {
    case "374":
      return "(min-width:1025px) 492px, (min-width:768px) 452px, 374px";

    case "196":
      return "(min-width:1025px) 216px, (min-width:768px) 206px, 196px";

    default:
      return "";
  }
}

function handleSrc(src: string, number: any) {
  let orgSrc = src;
  let orgCompress;
  if (!src.includes("https://")) {
    orgSrc = urlSite + src;
  } else {
    orgSrc = src;
  }

  if (number && !src.includes("(min-width")) {
    orgSrc = orgSrc + handleCompress(orgSrc, number);
  }

  return orgSrc;
}

function handleCompress(sizes: any, number: any) {
  console.log("num", number);
  switch (number) {
    case "492":
      return "?w=492&h=492&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.692&fp-y=0.2978";

    case "2":
      return "(min-width:1025px) 216px, (min-width:768px) 206px, 196px";

    default:
      return sizes;
  }
}

function handleSrcSet(srcSetNum: any) {
  let orgSrcSet;

  orgSrcSet = srcSetNum;
  return orgSrcSet;
}

export const ItemImage = ({ alt, src, srcSet, srcNum, sizesNum }: any) => {
  return (
    <img
      alt={alt}
      className="EdX"
      decoding="async"
      src={handleSrc(src, srcNum)}
      srcSet={handleSrcSet(srcSet)}
      sizes={handleSizes(sizesNum)}
    />
  );
};

export const InputTwo = ({ onChecked, className }: any) => (
  <input
    onChange={() => {}}
    checked={onChecked}
    id="radio-1-161523780"
    name="radio-161523780"
    type="radio"
    className={cx(`Du4 ${className}`)}
  />
);
