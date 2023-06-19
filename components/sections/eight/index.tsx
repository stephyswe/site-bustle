import { Section } from "@/components/section";
import CardEight from "@/components/sections/eight/card";
import PictureEight from "@/components/sections/eight/picture";

const SectionEight = ({ data: { content, picture } }: any) => (
  <Section cardNum={161523774}>
    <div className="w9K Mnx">
      <div className="mRp y-m">
        <a
          href="/style/how-the-all-new-genesis-g90-takes-korean-design-to-an-audacious-new-level"
          className="Hof"
        ></a>
        <div className="rHN cCV">
          <div className="sWr">
            <div className="T8A">
              <div className="gsz G2w I0j">
                <CardEight data={content} />
                <PictureEight data={picture} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default SectionEight;
