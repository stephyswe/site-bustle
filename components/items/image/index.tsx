/* eslint-disable @next/next/no-img-element */
import cn from "classnames";

import { caseSizes, handleSrc, handleSrcSet } from "./utils";

export const ItemImage = ({
  className,
  overwriteCompress,
  sizesNum,
  image: { alt = " ", src, srcFolder, srcCompress, sets },
}: any) => (
  <img
    src={handleSrc(src, srcFolder, overwriteCompress ?? srcCompress)}
    srcSet={sets ? handleSrcSet(sets, srcFolder, src) : ""}
    sizes={caseSizes(sizesNum)}
    alt={alt}
    className={cn(`${className} EdX`)}
    decoding="async"
  />
);

export const ItemNewImage = ({
  className,
  image: { alt = "", src, sets, sizes },
}: any) => (
  <img
    alt={alt}
    className={cn(className, "EdX")}
    decoding="async"
    src={src}
    srcSet={sets}
    sizes={sizes}
  />
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
