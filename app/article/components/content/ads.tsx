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

export default CardArticleAds;
