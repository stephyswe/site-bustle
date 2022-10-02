import type { NextPage } from "next";
import { Header } from "../components/layout/header";
import { ContentTop } from "../components/content/top";
import { ContentFirst } from "../components/content/one";
import { ContentTwo } from "../components/content/two";
import { ContentThree } from "../components/content/three";
import { ContentFour } from "../components/content/four";
import { ContentFive } from "../components/content/five";
import { allData } from "../constants/data";

const Home: NextPage = () => {
  const { first, second, third, four, five } = allData;
  return (
    <div>
      <Header />
      <div>
        <ContentTop />
        <ContentFirst data={first} cardNum={161523783} />
        <ContentTwo data={second} />
        <ContentThree data={third} />
        <ContentFour data={four} />
        <ContentFive data={five} />
      </div>
    </div>
  );
};

export default Home;
