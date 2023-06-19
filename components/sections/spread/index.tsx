import CardArticles from "@/components/card/articles";
import CardHeadline from "@/components/card/headline";
import CardTime from "@/components/card/time";
import { Section } from "@/components/section";

const SectionSpread = ({ cardNum, data: { left, right, middle } }: any) => (
  <Section cardNum={cardNum}>
    <div className="Zfw Rz_">
      <div className="f8u">
        <CardHeadline data={left} />
        <div className="net z4K">
          {right.map((item: any, index: number) => (
            <CardArticles key={index} data={item} />
          ))}
        </div>
        <div className="og9 lxG">
          <div className="uOw">
            {middle.map((item: any) => (
              <CardTime key={item.title} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default SectionSpread;
