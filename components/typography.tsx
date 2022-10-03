import cx from "classnames";

/* subtitle */

export const Subtitle = ({ className = "ROJ", children }: any) => {
  return <p className={cx(`NNe ${className}`)}>{children}</p>;
};

export const SubtitleNewsLetter = ({ children }: any) => (
  <div className="EFv">
    <p>{children}</p>
  </div>
);

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

export const TitleNewsLetter = ({ children }: any) => (
  <h1 className="wqK">{children}</h1>
);

export const TitleArticle = ({ children }: any) => (
  <p className="r0U XOF">{children}</p>
);

export const TitleTime = ({ title }: any) => (
  <div className="qc5">
    <p>{title}</p>
  </div>
);

export const SectionTwoContentTitle = ({ children }: any) => (
  <p className="Eby">{children}</p>
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
