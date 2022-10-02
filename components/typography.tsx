import cx from "classnames";

export const Typography = ({ children }: any) => {
  return <p className="EIU xpu">{children}</p>;
};

export const Subtitle = ({ className = "ROJ", children }: any) => {
  return <p className={cx(`NNe ${className}`)}>{children}</p>;
};

export const SubtitleTwo = ({ children }: any) => (
  <p className="rbb">{children}</p>
);

export const Title = ({ className = "xpu", children }: any) => {
  return <p className={cx(`EIU ${className}`)}>{children}</p>;
};

export const TitleContentTwo = ({ children }: any) => (
  <p className="Eby">{children}</p>
);

export const Title2ContentTwo = ({ children }: any) => (
  <p className="wUE">{children}</p>
);

export const Tag = ({ children, className = "Mm3" }: any) => (
  <div className="Trd">
    <p className={cx(`aCn ${className}`)}>{children}</p>
  </div>
);

export const TagTwo = ({ children }: any) => (
  <span className="VK0 b8r">{children}</span>
);
