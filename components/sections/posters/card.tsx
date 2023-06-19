import { ItemImage } from "@/components/items";
import Typography from "@/components/items/typography";

const CardPoster = ({ data: { tag, title, image } }: any) => (
  <a href="/entertainment/shania-twain-new-album-tour" className="AYM L_P">
    <div className="f_s L9Q">
      <div className="vmZ KlX">
        <ItemImage image={image} overwriteCompress="240" sizesNum="195" />
      </div>
    </div>
    <div className="Epy">
      <div className="nRE">
        {tag ? (
          <Typography type="tag" variant="article" className="b8r">
            {tag}
          </Typography>
        ) : null}
      </div>
      <p className="r0U G97">{title}</p>
    </div>
  </a>
);

export default CardPoster;
