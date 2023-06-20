import ArticleAside from "@/app/article/components/aside";
import ArticleContent from "@/app/article/components/content";
import ArticleTop from "@/app/article/components/top";

const dataArticle = {
  top: {
    picture: {
      videoSrc: "https://dr58mx4d40r1x.cloudfront.net/159200032/medium.mp4",
    },
    header: {
      tag: "We're Worried, Darling",
      title: (
        <h1 className="aVX cS4 rRO it9">
          The Twists In<em> Don’t Worry Darling</em>, Ranked By Messiness
        </h1>
      ),
      subtitle:
        "Just wait until you find out the reasoning behind Harry Styles’ accent...",
      author: "Chloe Foussianes",
      time: "Sep. 28, 2022",
    },
  },
};

export default function ArticlePage() {
  const { top } = dataArticle;
  return (
    <div>
      <article className="KTZ page-157835295">
        <ArticleTop data={top} />
        <ArticleAside />
        <ArticleContent />
      </article>
    </div>
  );
}
