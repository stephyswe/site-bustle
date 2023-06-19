import { ItemImage } from "@/components/items";
import { Section } from "@/components/section";

const SectionFour = ({ data: { title, image } }: any) => (
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
            <ItemImage image={image} className="fpC XBl" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default SectionFour;
