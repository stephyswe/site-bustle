/* eslint-disable @next/next/no-img-element */
import { urlSite } from "../../constants/data";
import { Section } from "../section";
import { Subtitle, Tag, Title, Typography } from "../typography";
import { Author, ItemImage } from "./items";

/* eslint-disable react/no-unescaped-entities */
export const ContentFirst = ({
  cardNum,
  data: { left, right, middle },
}: any) => (
  <Section cardNum={cardNum}>
    <div className="Zfw Rz_">
      <div className="f8u">
        <ContentLeft data={left} />
        <ContentRight data={right} />
        <ContentMiddle data={middle} />
      </div>
    </div>
  </Section>
);

const ContentMiddle = ({ data }: any) => (
  <div className="og9 lxG">
    <div className="uOw">
      {data.map((item: any) => (
        <ContentMiddleCard key={item.title} data={item} />
      ))}
    </div>
  </div>
);

export const ContentMiddleCard = ({ data: { href, title, time } }: any) => (
  <a key={title} href={href} className="sJ3">
    <div>
      <time dateTime="2022-09-30T22:09:57.423Z" className="wtm">
        {time}
      </time>
    </div>
    <p className="h8l">{title}</p>
  </a>
);

const ContentRightCard = ({
  data: { style, tag, title, subtitle, href, image, author },
}: any) => (
  <a href={href} className="MKc p-W">
    <div className="O-E cNR">
      <div style={style} className="vmZ tW7 ap2">
        <ItemImage
          sizesNum="196"
          alt={image.alt}
          src={image.src}
          srcSet={image.srcSet}
        />
      </div>
    </div>
    <Tag>{tag}</Tag>
    <Title>{title}</Title>
    <div className="Q9i mp_">
      <Subtitle>{subtitle}</Subtitle>
      <Author data={author} />
    </div>
  </a>
);

const ContentRight = ({ data }: any) => (
  <div className="net z4K">
    {data.map((item: any, index: number) => (
      <ContentRightCard key={index} data={item} />
    ))}
  </div>
);

const contentLeftData = {
  src: "2022/9/19/1e83cea8-1e58-411e-8a7e-83157505102e-shaniatwain_1_header.jpg",
};

const ContentLeft = ({ data: { title, subtitle, author, href } }: any) => {
  const { src } = contentLeftData;
  return (
    <a href={href} className="Fh8 PYF">
      <div className="O-E cNR">
        <div style={{ paddingTop: "100%" }} className="vmZ tW7 ap2">
          <ItemImage
            src={src}
            srcSet="https://imgix.bustle.com/uploads/image/2022/9/19/1e83cea8-1e58-411e-8a7e-83157505102e-shaniatwain_1_header.jpg?w=374&amp;h=374&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.692&amp;fp-y=0.2978 374w, https://imgix.bustle.com/uploads/image/2022/9/19/1e83cea8-1e58-411e-8a7e-83157505102e-shaniatwain_1_header.jpg?w=374&amp;h=374&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;q=50&amp;fp-x=0.692&amp;fp-y=0.2978&amp;dpr=2 748w, https://imgix.bustle.com/uploads/image/2022/9/19/1e83cea8-1e58-411e-8a7e-83157505102e-shaniatwain_1_header.jpg?w=492&amp;h=492&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.692&amp;fp-y=0.2978 492w, https://imgix.bustle.com/uploads/image/2022/9/19/1e83cea8-1e58-411e-8a7e-83157505102e-shaniatwain_1_header.jpg?w=492&amp;h=492&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;q=50&amp;fp-x=0.692&amp;fp-y=0.2978&amp;dpr=2 984w, https://imgix.bustle.com/uploads/image/2022/9/19/1e83cea8-1e58-411e-8a7e-83157505102e-shaniatwain_1_header.jpg?w=452&amp;h=452&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.692&amp;fp-y=0.2978 452w, https://imgix.bustle.com/uploads/image/2022/9/19/1e83cea8-1e58-411e-8a7e-83157505102e-shaniatwain_1_header.jpg?w=452&amp;h=452&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;q=50&amp;fp-x=0.692&amp;fp-y=0.2978&amp;dpr=2 904w"
            sizesNum="374"
          />
        </div>
      </div>
      <div className="Trd"></div>
      <Typography>{title}</Typography>
      <div className="Q9i mp_">
        <Subtitle>{subtitle}</Subtitle>
        <Author data={author} />
      </div>
    </a>
  );
};
