import { Fragment } from "react";

import { Video } from "../../components/items/video";
import { Header } from "../../components/layout/header";
import { dataArticle } from "../../constants/article";

const moreDataArticle = {
  top: {
    picture: {
      videoSrc: "https://dr58mx4d40r1x.cloudfront.net/159200032/medium.mp4",
    },
    header: {
      tag: "We're Worried, Darling",
      title: (
        <h1 className="aVX cS4 rRO it9">
          The Twists In<em> Don’t Worry Darling</em>, Ranked By Messiness
        </h1>
      ),
      subtitle:
        "Just wait until you find out the reasoning behind Harry Styles’ accent...",
      author: "Chloe Foussianes",
      time: "Sep. 28, 2022",
    },
  },
};

const Article = () => {
  const { top } = moreDataArticle;
  return (
    <div>
      <Header />
      <div>
        <article className="KTZ page-157835295">
          <ArticleTop data={top} />
          <ArticleAside />
          <ArticleContent />
        </article>
      </div>
    </div>
  );
};

const ArticleTop = ({ data: { header, picture } }: any) => (
  <div className="cCW">
    <div className="sWr">
      <div className="JD9">
        <div className="gsz Ak6">
          <ArticleHeader data={header} />
          <ArticlePicture data={picture} />
        </div>
      </div>
    </div>
  </div>
);

const ArticlePicture = ({ data: { videoSrc } }: any) => (
  <div className="daF">
    <Video className="oL7" videoSrc={videoSrc} />
    <span className="Vms j29">
      Margaret Flatley/Bustle, Warner Bros Pictures, Getty Images
    </span>
  </div>
);

const ArticleHeader = ({
  data: { tag, title, subtitle, author, time },
}: any) => {
  return (
    <header className="HG4">
      <div className="Psy H0l">
        <p className="QwJ Kw5">{tag}</p>
      </div>
      {title}
      <div className="r87 uRt">
        <p>{subtitle}</p>
      </div>
      <div className="nKn">
        <address className="saA Fdy">
          <div>
            <em>by</em>{" "}
            <a href="/profile/chloe-foussianes-65813877">
              <strong>{author}</strong>
            </a>
          </div>
        </address>
        <div className="DHw">
          <div>
            <time dateTime="2022-09-28T13:00:26.066Z">{time}</time>
          </div>
        </div>
      </div>
    </header>
  );
};

const ArticleContent = () => (
  <div className="t9u">
    <div data-adroot="true" className="Afg NpE">
      {dataArticle.data.map((item: any, index: number) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
      <aside className="fX2 rhF jIS" style={{ gridRow: "4 / span 3" }}>
        <div>
          <div className="lqj">
            <div className="z3b">More like this</div>
            <div className="FZb">
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
            </div>
          </div>
          <div className="lqj">
            <CardArticleAds />
          </div>
        </div>
      </aside>
    </div>
  </div>
);

const CardArticleAds = () => (
  <div className="lqj">
    <div className="z3b">
      Get Even More From Bustle — Sign Up For The Newsletter
    </div>
    <div className="BMP">
      <div className="oHL">
        <label htmlFor="email-signup">
          From hair trends to relationship advice, our daily newsletter has
          everything you need to sound like a person who’s on TikTok, even if
          you aren’t.
        </label>
      </div>
      <form
        action="https://newsletter.bustle.com/signup"
        method="get"
        className=""
      >
        <input name="site" type="hidden" value="BUSTLE" />
        <input name="source" type="hidden" value="OnDeck" />
        <input name="primaryNewsletter" type="hidden" value="bustle" />
        <div className="gQD">
          <input
            onChange={() => {}}
            autoComplete="email"
            id="email-signup"
            name="email"
            placeholder="email@email.com"
            required={true}
            type="email"
            value=""
            className="VU5"
          />
          <div className="Rp5">
            <div className="kj_">I’d also like to receive:</div>
            <div className="i5n">
              <input
                onChange={() => {}}
                checked={false}
                id="f99ffe6a-5301-4592-b119-c771f566ead1-upNext"
                value="upNext"
                name="f99ffe6a-5301-4592-b119-c771f566ead1-upNext"
                type="checkbox"
              />
              <label htmlFor="f99ffe6a-5301-4592-b119-c771f566ead1-upNext">
                Up Next
              </label>
            </div>
          </div>
          <button type="submit" className="Ex8 qgj">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

const CardArticle = () => (
  <a href="/entertainment/2023-oscar-predictions" className="vok">
    <div className="OO4">
      <div style={{ paddingTop: "69.1824%" }} className="vmZ ap2">
        <video autoPlay={true} playsInline={true} loop={true} className="EdX">
          <source
            type="video/webm"
            src="https://imgix.bustle.com/uploads/image/2022/9/20/20c2d884-d3f6-4b1e-9b77-1e6f29fd1453-womenoscars_teaser.gif?w=600&amp;h=415&amp;fit=max&amp;fm=webm"
          />
          <source
            type="video/mp4"
            src="https://imgix.bustle.com/uploads/image/2022/9/20/20c2d884-d3f6-4b1e-9b77-1e6f29fd1453-womenoscars_teaser.gif?w=600&amp;h=415&amp;fit=max&amp;fm=mp4"
          />
        </video>
      </div>
    </div>
    <div className="Msl">
      <div className="D-3">14 Women To Watch This Oscar Season</div>
      <div className="bIJ">
        <span>By </span>
        <span>Marina Watts</span>
      </div>
    </div>
  </a>
);

const ArticleAside = () => (
  <div className="QVH">
    <div className="qwO X7m">
      <a href="/entertainment-issue-2022" className="wVh">
        Entertainment Issue 2022
      </a>
    </div>
  </div>
);

export default Article;
