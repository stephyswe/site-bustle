const CardSectionSixHeading = ({
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

export default CardSectionSixHeading;
