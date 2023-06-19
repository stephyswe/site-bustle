import cx from "classnames";

/* subtitle */

export const Subtitle = ({ className = "ROJ", children }: any) => {
  return <p className={cx(`NNe ${className}`)}>{children}</p>;
};

export const CardSectionTwoSubtitle = ({ children }: any) => (
  <p className="rbb">{children}</p>
);

export const SubtitleArticle = ({ children }: any) => (
  <p className="DTp bGk">{children}</p>
);

/* title */
export const Title = ({ className = "xpu", children }: any) => {
  return <p className={cx(`EIU ${className}`)}>{children}</p>;
};



export const TitleArticle = ({ children }: any) => (
  <p className="r0U XOF">{children}</p>
);

export const TitleTime = ({ title }: any) => (
  <div className="qc5">
    <p>{title}</p>
  </div>
);

export const CardSectionTwoTitle = ({ children }: any) => (
  <p className="wUE">{children}</p>
);

/* tag */

export const Tag = ({ children, className = "Mm3" }: any) => (
  <div className="Trd">
    <p className={cx(`aCn ${className}`)}>{children}</p>
  </div>
);

export const TagArticle = ({ className, children }: any) => (
  <span className={cx(`VK0 ${className}`)}>{children}</span>
);
