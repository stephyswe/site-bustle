import { Video } from "@/components/items/video";

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

export default ArticleTop;
