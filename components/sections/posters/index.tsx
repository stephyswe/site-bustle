import { useRef } from "react";

import CardPoster from "@/components/sections/posters/card";
import PosterWrapper from "@/components/sections/posters/wrapper";
import { sideScroll } from "@/utils/scroll";

const SectionPosters = ({ data }: any) => {
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  return (
    <PosterWrapper title="Bustle Originals">
      <button
        title="Previous page"
        className="odm m8M"
        tabIndex={-1}
        disabled={true}
      />
      <button
        title="Next page"
        className="odm xR8"
        tabIndex={-1}
        onClick={() => {
          sideScroll(contentWrapper.current as HTMLDivElement, 25, 100, 720);
        }}
      />
      <div className="yTZ" ref={contentWrapper}>
        <div className="bVG"></div>
        {data.map((item: any, index: number) => (
          <CardPoster key={index} data={item} />
        ))}
        <div className="Nyt pzW"></div>
        <div className="bVG"></div>
      </div>
    </PosterWrapper>
  );
};

export default SectionPosters;
