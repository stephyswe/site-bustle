import type { NextPage } from "next";
import { Header } from "../components/layout/header";
import { allData } from "../constants/data";
import {
  SectionFive,
  SectionFour,
  SectionPosters,
  SectionSeven,
  SectionSix,
  SectionSpread,
  SectionTwo,
} from "../components/sections";
import { Logo } from "../components/logo";

const Home: NextPage = () => {
  const { first, second, third, four, five, six, seven } = allData;
  return (
    <div>
      <Header />
      <div>
        <Logo />
        <SectionSpread data={first} cardNum={161523783} />
        <SectionTwo data={second} />
        <SectionPosters data={third} />
        <SectionFour data={four} />
        <SectionFive data={five} />
        <SectionSix data={six} />
        <SectionSeven data={five} />
      </div>
    </div>
  );
};

export default Home;
