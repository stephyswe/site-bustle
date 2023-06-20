"use client";

import SectionAllArticles from "@/components/sections/allArticles";
import SectionEight from "@/components/sections/eight";
import SectionFour from "@/components/sections/four";
import {
  SectionMagazine,
  SectionMagazineInverted,
} from "@/components/sections/magazine";
import SectionNewsLetter from "@/components/sections/newsletter";
import SectionPosters from "@/components/sections/posters";
import SectionSix from "@/components/sections/six";
import SectionSpread from "@/components/sections/spread";
import SectionTwo from "@/components/sections/two";

export default function SectionBase({
  data: {
    dataSectionOne,
    dataSectionTwo,
    dataSectionThree,
    dataSectionFour,
    dataSectionFive,
    dataSectionSix,
    dataSectionSeven,
    dataSectionEight,
    dataSectionNine,
    dataSectionTen,
    dataSectionEleven,
    //dataSectionTwelve,
    dataSectionThirteen,
    dataSectionFourteen,
  },
}: any) {
  return (
    <>
      <SectionSpread data={dataSectionOne} cardNum={161523783} />
      <SectionTwo data={dataSectionTwo} />
      <SectionPosters data={dataSectionThree} />
      <SectionFour data={dataSectionFour} />
      <SectionMagazineInverted
        data={dataSectionFive}
        cardNum={161523772}
        title="Entertainment"
        subtitle="Celebrity News"
      />
      <SectionSix data={dataSectionSix} />
      <SectionMagazine
        cardNum={161523773}
        title="Style"
        subtitle="Beauty News"
        data={dataSectionSeven}
      />
      <SectionEight data={dataSectionEight} />
      <SectionMagazineInverted
        data={dataSectionNine}
        cardNum={161523775}
        title="Wellness"
        subtitle="Mental Health"
      />
      <SectionNewsLetter data={dataSectionTen} />
      <SectionMagazine
        data={dataSectionEleven}
        cardNum={161523773}
        title="Life"
        subtitle="Tech"
      />
      <SectionEight data={dataSectionEight} />
      <SectionMagazineInverted
        data={dataSectionThirteen}
        cardNum={161523778}
        title="Rule Breakers"
        subtitle="Tech"
      />
      <SectionAllArticles data={dataSectionFourteen} />
    </>
  );
}
