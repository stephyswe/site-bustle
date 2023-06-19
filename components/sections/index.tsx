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

export default function SectionBase({ data }: any) {
  const {
    first,
    second,
    third,
    four,
    five,
    six,
    seven,
    eight,
    ten,
    nine,
    eleven,
    thirteen,
    fourteen,
  } = data;

  return (
    <>
      <SectionSpread data={first} cardNum={161523783} />
      <SectionTwo data={second} />
      <SectionPosters data={third} />
      <SectionFour data={four} />
      <SectionMagazineInverted
        data={five}
        cardNum={161523772}
        title="Entertainment"
        subtitle="Celebrity News"
      />
      <SectionSix data={six} />
      <SectionMagazine
        cardNum={161523773}
        title="Style"
        subtitle="Beauty News"
        data={seven}
      />
      <SectionEight data={eight} />
      <SectionMagazineInverted
        data={nine}
        cardNum={161523775}
        title="Wellness"
        subtitle="Mental Health"
      />
      <SectionNewsLetter data={ten} />
      <SectionMagazine
        data={eleven}
        cardNum={161523773}
        title="Life"
        subtitle="Tech"
      />
      <SectionEight data={eight} />
      <SectionMagazineInverted
        data={thirteen}
        cardNum={161523778}
        title="Rule Breakers"
        subtitle="Tech"
      />
      <SectionAllArticles data={fourteen} />
    </>
  );
}
