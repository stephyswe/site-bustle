import { ItemImage } from "@/components/items";
import { TagArticle } from "@/components/typography";

const CardPoster = ({ data: { tag, title, image } }: any) => (
  <a href="/entertainment/shania-twain-new-album-tour" className="AYM L_P">
    <div className="f_s L9Q">
      <div className="vmZ KlX">
        <ItemImage image={image} overwriteCompress="240" sizesNum="195" />
      </div>
    </div>
    <div className="Epy">
      <div className="nRE">
        {tag ? <TagArticle className="b8r">{tag}</TagArticle> : null}
      </div>
      <p className="r0U G97">{title}</p>
    </div>
  </a>
);

export default CardPoster;
