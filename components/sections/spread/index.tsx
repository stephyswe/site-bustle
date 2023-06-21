import CardArticles from "@/components/card/articles";
import CardTime from "@/components/card/time";
import { Section } from "@/components/section";
import CardHeadline from "@/components/sections/spread/headline";

const SectionSpread = ({ cardNum, data: { left, right, middle } }: any) => (
  <SectionSpreadBase
    cardNum={cardNum}
    Left={<CardHeadline data={left} />}
    Right={
      <>
        {right.map((item: any, index: number) => (
          <CardArticles key={index} data={item} />
        ))}
      </>
    }
    Middle={
      <>
        {middle.map((item: any) => (
          <CardTime key={item.title} data={item} />
        ))}
      </>
    }
  />
);

const SectionSpreadBase = ({ cardNum, Right, Left, Middle }: any) => (
  <Section cardNum={cardNum}>
    <div className="Zfw Rz_">
      <div className="f8u">
        {Left}
        <div className="net z4K">{Right}</div>
        <div className="og9 lxG">
          <div className="uOw">{Middle}</div>
        </div>
      </div>
    </div>
  </Section>
);

export default SectionSpread;
