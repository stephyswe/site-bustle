import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import { ItemNewImage } from "@/components/items/image";
import Typography from "@/components/items/typography";

const SectionTwoContent = ({
  onClick,
  num,
  label,
  data,
  data: { links },
}: any) => (
  <>
    <label
      onClick={() => onClick(num)}
      className="Efm"
      htmlFor="radio-0-161523780"
    >
      <div className="Xaa">{num}</div>
      <div className="Dlm">{label}</div>
    </label>
    <div className="iRG">
      <div className="mNi">
        <div className="IA_">
          <div className="wZQ">
            {links.map(({ title, href }: any) => (
              <a key={title} href={href} className="wLh">
                <SectionTwoContentTitle>{title}</SectionTwoContentTitle>
                <div className="_yv"></div>
              </a>
            ))}
          </div>
        </div>
        <CardSectionTwo data={data} />
      </div>
    </div>
  </>
);

const CardSectionTwo = ({
  data: { href, subtitle, author, title, image },
}: any) => (
  <a href={href} className="fz0">
    <div className="_yv"></div>
    <Typography type="title" variant="cardSectionTwo">
      {title}
    </Typography>
    <div className="wd0">
      <Typography type="subtitle" variant="cardSectionTwo">
        {subtitle}
      </Typography>
      <Author data={author} />
    </div>
    <div className="yMG">
      <div className="vmZ Dsq">
        <ItemNewImage image={image} />
      </div>
    </div>
  </a>
);

export const SectionTwoContentTitle = ({ children }: any) => (
  <p className="Eby">{children}</p>
);

export default SectionTwoContent;
