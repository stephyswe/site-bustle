/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Author, ItemImage, Video } from "./items";
import {
  Tag,
  Title,
  Subtitle,
  CardSectionTwoSubtitle,
  CardSectionTwoTitle,
  SectionTwoContentTitle,
  TagArticle,
} from "./typography";
import cx from "classnames";

export const CardTime = ({ data: { href, title, time } }: any) => (
  <a key={title} href={href} className="sJ3">
    <div>
      <time dateTime="2022-09-30T22:09:57.423Z" className="wtm">
        {time}
      </time>
    </div>
    <p className="h8l">{title}</p>
  </a>
);

export const CardArticles = ({
  data: { style, tag, title, subtitle, href, image, author },
}: any) => (
  <a href={href} className="MKc p-W">
    <div className="O-E cNR">
      <div style={style} className="vmZ tW7 ap2">
        <ItemImage sizesNum="196" image={image} />
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

export const CardHeadline = ({
  data: { image, title, subtitle, author, href },
}: any) => (
  <a href={href} className="Fh8 PYF">
    <div className="O-E cNR">
      <div style={{ paddingTop: "100%" }} className="vmZ tW7 ap2">
        <ItemImage image={image} sizesNum="374" />
      </div>
    </div>
    <div className="Trd"></div>
    <Title>{title}</Title>
    <div className="Q9i mp_">
      <Subtitle>{subtitle}</Subtitle>
      <Author data={author} />
    </div>
  </a>
);

export const SectionTwoContent = ({
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
    <CardSectionTwoTitle>{title}</CardSectionTwoTitle>
    <div className="wd0">
      <CardSectionTwoSubtitle>{subtitle}</CardSectionTwoSubtitle>
      <Author data={author} />
    </div>
    <div className="yMG">
      <div className="vmZ Dsq">
        <ItemImage image={image} sizesNum="197" overwriteCompress="540b" />
      </div>
    </div>
  </a>
);

const CardTitle = ({ data: { title, href } }: any) => (
  <a href={href} className="wLh">
    <SectionTwoContentTitle>{title}</SectionTwoContentTitle>
    <div className="_yv"></div>
  </a>
);

export const CardPoster = ({ data: { tag, title, image } }: any) => (
  <a href="/entertainment/shania-twain-new-album-tour" className="AYM L_P">
    <div className="f_s L9Q">
      <div className="vmZ KlX">
        <ItemImage image={image} overwriteCompress="240" sizesNum="195" />
      </div>
    </div>
    <div className="Epy">
      <div className="nRE">
        {tag ? <TagArticle className="b8r">{tag}</TagArticle> : null}
      </div>
      <p className="r0U G97">{title}</p>
    </div>
  </a>
);

export const CardSectionFiveLeft = ({
  data: { author, style, href, title, subtitle, image, videoSrc, tag },
}: any) => (
  <a className="MKc NEA" href={href}>
    <div className="O-E ACN">
      {image?.src ? (
        <div className="vmZ tW7 ap2" style={style}>
          <ItemImage overwriteCompress="216b" image={image} />
        </div>
      ) : null}
      {videoSrc ? <Video className="tW7" videoSrc={videoSrc} /> : null}
    </div>
    <Tag className="R-A">{tag}</Tag>
    <Title className="k84">{title}</Title>

    <div className="Q9i PN2">
      <p className="NNe Qeh">{subtitle}</p>
      {author ? <Author className="xaa" data={author} /> : null}
    </div>
  </a>
);

export const CardSectionFiveMiddle = ({
  orderHeading,
  data: { subtitle, title, href, style, author, image },
}: any) => (
  <a className={cx(`Fh8 ${orderHeading}`)} href={href}>
    <div className="O-E ACN">
      <div className="vmZ tW7 ap2" style={style}>
        <ItemImage image={image} sizesNum="374" overwriteCompress="492" />
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

export const CardSectionSixPicture = ({ data: { image, imageAlt } }: any) => (
  <div className="hJa">
    <div className="vmZ oL7">
      <ItemImage sizesNum="248" image={image} className="fpC" />
    </div>
    <span className="Vms Vo4">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.genesis.com/us/en/2023/genesis-g90.html"
      >
        {imageAlt}
      </a>
    </span>
  </div>
);

export const CardSectionSixHeading = ({
  data: { title, subtitle, time, author },
}: any) => (
  <header className="NLr">
    <div className="Psy nYg">
      <p className="QwJ n3V">Style</p>
      <div className="boW QVk">
        <div className="JOT eFu">
          <span className="c3b">Sponsored</span>
        </div>
      </div>
    </div>
    <h1 className="aVX gai RzU ZQG">{title}</h1>
    <div className="r87 Lgb">
      <p>{subtitle} </p>
    </div>
    <div className="yW1">
      <address className="saA Fdy">
        <div>
          <em>by</em>{" "}
          <a href="/profile/arielle-dachille-67802234">
            <strong>{author}</strong>
          </a>
        </div>
      </address>
      <div className="DHw">
        <div>
          <time dateTime="2022-09-07T14:45:30.841Z">{time}</time>
        </div>
      </div>
    </div>
  </header>
);

export const CardSectionEight = ({ data }: any) => (
  <header className="KfF">
    <div className="Psy gnY"></div>
    <h1 className="aVX Kca ifM E7W">Keke's World</h1>
    <div className="r87 dYp">
      <p>
        Between three movies, numerous TV shows, and an album, the busiest woman
        in Hollywood somehow was able to give us an hour.
      </p>
    </div>
    <div className="GGk">
      <address className="saA Fdy">
        <div>
          <em>by</em>{" "}
          <a href="/profile/sylvia-obell-30613123">
            <strong>Sylvia Obell</strong>
          </a>
        </div>
      </address>
      <div className="DHw">
        <div>
          <time dateTime="2022-03-17T18:00:25.449Z">March 17, 2022</time>
        </div>
      </div>
    </div>
  </header>
);

export const CardSectionEightPicture = ({ data: { image } }: any) => (
  <div className="u4k">
    <div className="vmZ oL7 YOh">
      <ItemImage
        image={image}
        className="fpC XBl"
        sizes="(min-width:1025px) 2000px, (min-width:768px) 768px, 414px"
      />
    </div>
  </div>
);
