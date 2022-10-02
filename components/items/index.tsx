import { Fragment } from "react";
import cx from "classnames";
import { handleSizes, handleSrc, handleSrcSet } from "./utils";

export const Video = ({ videoSrc }: any) => (
  <div className="Rfb tW7">
    <video autoPlay={true} className="kOK" loop={true} playsInline={false}>
      <source src={videoSrc} />
    </video>
  </div>
);

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

export const ItemImage = ({
  className,
  overwriteCompress,
  sizesNum,
  image: { alt = " ", src, srcNum, srcFolder, srcCompress, sets },
}: any) => (
  <img
    src={handleSrc(
      src,
      srcNum,
      srcFolder,
      overwriteCompress ? overwriteCompress : srcCompress
    )}
    srcSet={sets ? handleSrcSet(sets, srcFolder, src) : ""}
    sizes={handleSizes(sizesNum)}
    alt={alt}
    className={cx(`${className} EdX`)}
    decoding="async"
  />
);

export const InputRadio = ({ onChecked, className }: any) => (
  <input
    onChange={() => {}}
    checked={onChecked}
    id="radio-1-161523780"
    name="radio-161523780"
    type="radio"
    className={cx(`Du4 ${className}`)}
  />
);

export const Label = ({ onClick, className, num, title, numIndex }: any) => (
  <label
    onClick={() => onClick(num)}
    className={cx(`${className} pDF`)}
    htmlFor={`radio-${numIndex}-161523780`}
  >
    <div className="Xaa">{num}</div>
    <div className="Dlm">{title}</div>
  </label>
);

/*
function automateArray(string) {
  const newArray = string.split(",")
  const anotherArray = newArray.map((txt, index) => {
    if (newArray.length - 1 > index) txt = txt.concat(", ")
    return txt.slice(txt.indexOf('?'))
  })
  return {sets: anotherArray}
}
const sets = automateArray(longString)
*/
