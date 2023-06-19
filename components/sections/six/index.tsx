import { Section } from "@/components/section";
import CardSectionSixPicture from "@/components/sections/six/card";
import CardSectionSixHeading from "@/components/sections/six/heading";

const SectionSix = ({ data: { content, picture } }: any) => (
  <Section cardNum={161523787}>
    <div className="w9K Mnx">
      <div className="mRp">
        <a
          href="/style/how-the-all-new-genesis-g90-takes-korean-design-to-an-audacious-new-level"
          className="Hof"
        ></a>
        <div className="rHN cCV">
          <div className="sWr">
            <div className="cUF">
              <div className="gsz fQd">
                <CardSectionSixHeading data={content} />
                <CardSectionSixPicture data={picture} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default SectionSix;
