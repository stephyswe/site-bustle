import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import { ItemNewImage } from "@/components/items/image";
import Typography from "@/components/items/typography";
import { VideoOrImage } from "@/components/sections/spread/headline";
import cssToJs from "@/utils/cssToJs";

const CardArticles = ({
  data: { style, tag, title, subtitle, href, image, author, videoSrc },
}: any) => {
  const subtitleText = <span dangerouslySetInnerHTML={{ __html: subtitle }} />;

  return (
    <a href={href} className="MKc p-W">
      <div className="O-E cNR">
        <VideoOrImage
          image={image}
          videoSrc={videoSrc}
          videoParentStyle={style ? cssToJs(style) : { paddingTop: "107.356%" }}
          imageParentStyle={style ? cssToJs(style) : null}
        />
      </div>
      <Typography type="tag" variant="default">
        {tag}
      </Typography>
      <Typography type="title" variant="default">
        {title}
      </Typography>
      <div className="Q9i mp_">
        <Typography type="subtitle" variant="default">
          {subtitleText}
        </Typography>
        <Author data={author} />
      </div>
    </a>
  );
};

export default CardArticles;
