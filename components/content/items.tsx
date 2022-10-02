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

    case "540":
      return "(min-width:1025px) 540px, (min-width:768px) 342px, 197px";

    case "195":
      return "(min-width:1025px) 240px, (min-width:768px) 260px, 195px";
    default:
      return "";
  }
}

function handleUrlSite(urlSite: any, srcFolder: any) {
  let orgUrlSite = urlSite;
  if (srcFolder) {
    orgUrlSite = `${orgUrlSite.replace("/image", "")}/${srcFolder}`;
  }
  return orgUrlSite;
}

function handleSrc(src: string, srcNum: any, srcFolder: any, srcCompress: any) {
  let orgSrc = src;
  if (!src.includes("https://")) {
    orgSrc = handleUrlSite(urlSite, srcFolder) + src;
  } else {
    orgSrc = src;
  }

  if (srcCompress && !src.includes("(min-width")) {
    orgSrc = orgSrc + handleCompress(orgSrc, srcCompress);
  }

  return orgSrc;
}

function handleCompress(sizes: any, number: any) {
  switch (number) {
    case "216":
      return "?w=216&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.504&amp;fp-y=0.453";

    case "216b":
      return "?w=216&fit=crop&crop=faces&auto=format%2Ccompress";

    case "216c":
      return "?w=216&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5747&fp-y=0.6693";

    case "240":
      return "?w=240&fit=crop&crop=faces&auto=format%2Ccompress";

    case "492":
      return "?w=492&amp;h=492&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress";

    case "492b":
      return "?w=492&h=492&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.692&fp-y=0.2978";

    case "540":
      return "?w=540&amp;h=405&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress";

    case "540b":
      return "?w=540&h=405&fit=crop&crop=faces&auto=format%2Ccompress";
    default:
      return sizes;
  }
}

function handleSrcSet(srcSetNum: any) {
  let orgSrcSet;

  orgSrcSet = srcSetNum;
  return orgSrcSet;
}

export const ItemImageOnlyImage = ({
  overwriteCompress,
  sizesNum,
  image: { alt, src, srcNum, srcFolder, srcCompress },
}: any) => {
  return (
    <img
      alt={alt}
      className="EdX"
      decoding="async"
      src={handleSrc(
        src,
        srcNum,
        srcFolder,
        overwriteCompress ? overwriteCompress : srcCompress
      )}
      sizes={handleSizes(sizesNum)}
    />
  );
};

export const ItemImage = ({
  alt,
  src,
  srcFolder,
  srcNum,
  sizesNum,
  srcCompress,
}: any) => {
  return (
    <img
      alt={alt}
      className="EdX"
      decoding="async"
      src={handleSrc(src, srcNum, srcFolder, srcCompress)}
      //srcSet={handleSrcSet(srcSet)}
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
