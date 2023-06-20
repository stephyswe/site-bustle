"use client";

import { Fragment } from "react";

import CardArticleAds from "@/app/article/components/content/ads";
import CardArticle from "@/components/card/article";
import { dataArticle } from "@/constants/article";

const ArticleContent = () => (
  <div className="t9u">
    <div data-adroot="true" className="Afg NpE">
      {dataArticle.data.map((item: any, index: number) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
      <aside className="fX2 rhF jIS" style={{ gridRow: "4 / span 3" }}>
        <div>
          <div className="lqj">
            <div className="z3b">More like this</div>
            <div className="FZb">
              {/* <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle /> */}
            </div>
          </div>
          <div className="lqj">
            <CardArticleAds />
          </div>
        </div>
      </aside>
    </div>
  </div>
);

export default ArticleContent;
