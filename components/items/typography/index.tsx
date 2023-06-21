import cn from "classnames";
import React, { FC } from "react";

import { htmlText } from "@/components/card/articles";

type Type = "subtitle" | "title" | "tag";
type Variant = "default" | "article" | "time" | "cardSectionTwo";

interface Props {
  type: Type;
  variant: Variant;
  className?: string;
  children: React.ReactNode;
}

const TYPES: Record<Type, Record<Variant, string>> = {
  subtitle: {
    default: "NNe ROJ",
    cardSectionTwo: "rbb",
    article: "DTp bGk",
    time: "",
  },
  title: {
    default: "EIU xpu",
    article: "r0U XOF",
    time: "qc5",
    cardSectionTwo: "wUE",
  },
  tag: {
    default: "Trd aCn Mm3",
    article: "VK0",
    time: "",
    cardSectionTwo: "",
  },
};

const Typography: FC<Props> = ({ type, variant, children, className }) => {
  const baseClasses = TYPES[type][variant];
  const allClasses = cn(
    baseClasses.split(" "),
    className && className.split(" ")
  );

  const Wrapper = type === "tag" && variant === "article" ? "span" : "p";

  if (type === "title" && variant === "time") {
    return (
      <div className={allClasses}>
        <p>{children}</p>
      </div>
    );
  }

  if (type === "tag" && variant === "default") {
    return (
      <div className={allClasses.split(" ")[0]}>
        <p className={cn(allClasses.split(" ").slice(1))}>{children}</p>
      </div>
    );
  }

  if (type === "subtitle")
    return <Wrapper className={allClasses}>{htmlText(children)}</Wrapper>;

  return <Wrapper className={allClasses}>{children}</Wrapper>;
};

export default Typography;
