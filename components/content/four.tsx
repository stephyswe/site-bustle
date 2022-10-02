/* eslint-disable @next/next/no-img-element */

import { Section } from "../section";

export const ContentFour = ({
  data: {
    title,
    image: { src },
  },
}: any) => (
  <Section cardNum={161523785}>
    <div className="T8A">
      <div className="gsz G2w">
        <header className="KfF">
          <div className="Psy gnY"></div>
          <h1 className="aVX Kca IhL uFd">{title}</h1>
          <div className="r87 dYp">
            <p>
              <a href="https://www.bustle.com/health-wellness-issue-2022">
                <strong>Read more</strong>
              </a>
            </p>
          </div>
        </header>
        <div className="u4k">
          <div className="vmZ oL7 YOh">
            <img
              src={src}
              srcSet="https://imgix.bustle.com/uploads/image/2022/7/8/f40f2df2-0817-45b5-b317-644bcc4d2c78-hw_headlinecard.jpg?w=414&amp;h=478&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.592&amp;fp-y=0.2623 414w, https://imgix.bustle.com/uploads/image/2022/7/8/f40f2df2-0817-45b5-b317-644bcc4d2c78-hw_headlinecard.jpg?w=414&amp;h=478&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;q=50&amp;fp-x=0.592&amp;fp-y=0.2623&amp;dpr=2 828w, https://imgix.bustle.com/uploads/image/2022/7/8/f40f2df2-0817-45b5-b317-644bcc4d2c78-hw_headlinecard.jpg?w=2000&amp;h=640&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.592&amp;fp-y=0.2623 2000w, https://imgix.bustle.com/uploads/image/2022/7/8/f40f2df2-0817-45b5-b317-644bcc4d2c78-hw_headlinecard.jpg?w=2000&amp;h=640&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;q=50&amp;fp-x=0.592&amp;fp-y=0.2623&amp;dpr=2 4000w, https://imgix.bustle.com/uploads/image/2022/7/8/f40f2df2-0817-45b5-b317-644bcc4d2c78-hw_headlinecard.jpg?w=768&amp;h=890&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.592&amp;fp-y=0.2623 768w, https://imgix.bustle.com/uploads/image/2022/7/8/f40f2df2-0817-45b5-b317-644bcc4d2c78-hw_headlinecard.jpg?w=768&amp;h=890&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;q=50&amp;fp-x=0.592&amp;fp-y=0.2623&amp;dpr=2 1536w"
              alt=""
              className="fpC XBl EdX"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);
