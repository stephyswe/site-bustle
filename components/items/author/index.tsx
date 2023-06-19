import cn from "classnames";
import { Fragment } from "react";

export const Author = ({ data, className = "AGA" }: any) => (
  <div className={cn(`lFD ${className}`)}>
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
