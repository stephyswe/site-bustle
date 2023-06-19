import SectionBase from "@/components/sections";

import { Logo } from "../components/logo";
import { data } from "../constants/api";

const Home = () => {
  return (
    <div>
      <Logo />
      <SectionBase data={data} />
    </div>
  );
};

export default Home;
