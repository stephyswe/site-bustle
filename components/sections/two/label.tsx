import cn from "classnames";

export const Label = ({ onClick, className, num, title, numIndex }: any) => (
  <label
    onClick={() => onClick(num)}
    className={cn(`${className} pDF`)}
    htmlFor={`radio-${numIndex}-161523780`}
  >
    <div className="Xaa">{num}</div>
    <div className="Dlm">{title}</div>
  </label>
);
