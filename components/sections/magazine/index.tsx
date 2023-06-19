import { Section } from "@/components/section";
import MagazineContent from "@/components/sections/magazine/content";
import MagazineHeading from "@/components/sections/magazine/heading";
import MagazineWrapper from "@/components/sections/magazine/wrapper";

const SectionMagazine = ({ title, subtitle, cardNum, data }: any) => (
  <Section cardNum={cardNum}>
    <MagazineWrapper>
      <MagazineHeading title={title} />
      <MagazineContent
        title={subtitle}
        data={data}
        orderTime="yHP"
        orderArticles="Kf6"
        orderHeading="FpW"
      />
    </MagazineWrapper>
  </Section>
);

const SectionMagazineInverted = ({ title, subtitle, cardNum, data }: any) => (
  <Section cardNum={cardNum}>
    <MagazineWrapper>
      <MagazineHeading className="Egy" title={title} />
      <MagazineContent
        title={subtitle}
        data={data}
        orderTime="QXt"
        orderArticles="GY8"
        orderHeading="uji"
      />
    </MagazineWrapper>
  </Section>
);

export { SectionMagazine, SectionMagazineInverted };
