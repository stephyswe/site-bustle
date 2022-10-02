/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { subtle } from "crypto";
import { urlSite } from "../../constants/data";
import { Section } from "../section";
import { Subtitle, Tag, Title } from "../typography";
import { Author, ItemImage } from "./items";
import { ContentMiddleCard } from "./one";

const ContentFiveHeader = ({ title }: any) => (
  <div className="ops Egy">
    <a href="/entertainment">
      <div className="CJo">
        <p>{title}</p>
      </div>
    </a>
  </div>
);

const ContentFiveMiddle = ({ data: { left, right } }: any) => (
  <div className="f8u">
    <ContentFiveSectionMiddle data={contentMiddleData} />
    <div className="net GY8">
      {left.map((item: any) => (
        <ContentFiveCard key={item.title} data={item} />
      ))}
    </div>
    <ContentFiveSectionRight title="Celebrity News" data={right} />
  </div>
);

const ContentFiveSectionRight = ({ title, data }: any) => (
  <div className="og9 QXt">
    <div className="qc5">
      <p>{title}</p>
    </div>
    <div className="uOw">
      {data.map((item: any) => (
        <ContentMiddleCard key={item.title} data={item} />
      ))}
    </div>
  </div>
);

const ContentFiveCard = ({
  data: { author, style, href, title, subtitle, image, videoSrc, tag },
}: any) => (
  <a className="MKc NEA" href={href}>
    <div className="O-E ACN">
      {image?.src ? (
        <div className="vmZ tW7 ap2" style={style}>
          <ItemImage
            src={
              urlSite +
              image.src +
              "?w=216&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress"
            }
            alt={image.alt}
            className="EdX"
            decoding="async"
          />
        </div>
      ) : null}
      {videoSrc ? (
        <div className="Rfb tW7">
          <video
            autoPlay={true}
            className="kOK"
            loop={true}
            playsInline={false}
          >
            <source src={videoSrc} />
          </video>
        </div>
      ) : null}
    </div>
    <Tag className="R-A">{tag}</Tag>
    <Title className="k84">{title}</Title>

    <div className="Q9i PN2">
      <p className="NNe Qeh">{subtitle}</p>
      {author ? <Author className="xaa" data={author} /> : null}
    </div>
  </a>
);

const contentMiddleData = {
  style: { paddingTop: "100%" },
  href: "/entertainment/paul-mescal-aftersun-gods-creatures-the-internet-his-relationship",
  title: "Paul Mescal, Man Of Mystery",
  subtitle:
    "The internet's favorite brooding young man would rather be misunderstood than overshare.",
  image: {
    src: "/2022/9/27/b96879c7-089b-4946-acf0-dcc42a7f4e2a-paulmescal_1.jpg",
  },
  author: ["Samantha Leach", "Heather Hazzan"],
};

const ContentFiveSectionMiddle = ({
  data: {
    subtitle,
    title,
    href,
    style,
    author,
    image: { src },
  },
}: any) => (
  <a className="Fh8 uji" href={href}>
    <div className="O-E ACN">
      <div className="vmZ tW7 ap2" style={style}>
        <ItemImage
          src={
            src +
            "?w=492&amp;h=492&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress"
          }
          srcSet="https://imgix.bustle.com/uploads/image/2022/9/27/b96879c7-089b-4946-acf0-dcc42a7f4e2a-paulmescal_1.jpg?w=374&amp;h=374&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress 374w, https://imgix.bustle.com/uploads/image/2022/9/27/b96879c7-089b-4946-acf0-dcc42a7f4e2a-paulmescal_1.jpg?w=374&amp;h=374&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress&amp;q=50&amp;dpr=2 748w, https://imgix.bustle.com/uploads/image/2022/9/27/b96879c7-089b-4946-acf0-dcc42a7f4e2a-paulmescal_1.jpg?w=492&amp;h=492&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress 492w, https://imgix.bustle.com/uploads/image/2022/9/27/b96879c7-089b-4946-acf0-dcc42a7f4e2a-paulmescal_1.jpg?w=492&amp;h=492&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress&amp;q=50&amp;dpr=2 984w, https://imgix.bustle.com/uploads/image/2022/9/27/b96879c7-089b-4946-acf0-dcc42a7f4e2a-paulmescal_1.jpg?w=452&amp;h=452&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress 452w, https://imgix.bustle.com/uploads/image/2022/9/27/b96879c7-089b-4946-acf0-dcc42a7f4e2a-paulmescal_1.jpg?w=452&amp;h=452&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress&amp;q=50&amp;dpr=2 904w"
          sizes="(min-width:1025px) 492px, (min-width:768px) 452px, 374px"
        />
      </div>
    </div>
    <div className="Trd"></div>
    <Title className="k84">{title}</Title>
    <div className="Q9i PN2">
      <Subtitle className="Qeh">{subtitle}</Subtitle>
      <Author className="xaa" data={author} />
    </div>
  </a>
);

export const ContentFive = ({ data }: any) => (
  <Section cardNum={161523772}>
    <div className="w9K">
      <div className="mRp">
        <div className="rHN cCV">
          <div className="sWr">
            <div className="Zfw">
              <ContentFiveHeader title="Entertainment" />
              <ContentFiveMiddle data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
