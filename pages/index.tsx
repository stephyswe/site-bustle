import type { NextPage } from "next";
import { Header } from "../components/layout/header";
import { allData } from "../constants/api";
import {
  SectionAllArticles,
  SectionEight,
  SectionMagazineInverted,
  SectionFour,
  SectionMagazine,
  SectionNewsLetter,
  SectionPosters,
  SectionSix,
  SectionSpread,
  SectionTwo,
} from "../components/sections";
import { Logo } from "../components/logo";

const Home: NextPage = () => {
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
  } = allData;
  return (
    <div>
      <Header />
      <div>
        <Logo />
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
      </div>
    </div>
  );
};

export default Home;
