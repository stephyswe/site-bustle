import cn from "classnames";

export const MagazineHeading = ({ className, title }: any) => (
  <div className={cn(`ops ${className}`)}>
    <a href="/entertainment">
      <div className="CJo">
        <p>{title}</p>
      </div>
    </a>
  </div>
);

export default MagazineHeading;
