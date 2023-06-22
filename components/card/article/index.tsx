import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import Typography from "@/components/items/typography";

const CardArticle = ({
  data: { href, title, subtitle, tag, author, image },
}: any) => (
  <a href={href} className="AYM iH0">
    <div className="f_s gGe">
      <div style={{ paddingTop: "100%" }} className="vmZ KlX oIZ ap2">
        <ItemImage image={image} className="Toq" sizesNum="123" />
      </div>
    </div>

    <div className="J1w">
      <div className="nRE">
        <Typography type="tag" variant="article" className="wPh">
          {tag}
        </Typography>
      </div>

      <Typography type="title" variant="article">
        {title}
      </Typography>
    </div>
    <div className="hiy">
      <Typography type="subtitle" variant="article">
        {subtitle}
      </Typography>
      <Author className="atc" data={author}></Author>
    </div>
  </a>
);

export default CardArticle;
