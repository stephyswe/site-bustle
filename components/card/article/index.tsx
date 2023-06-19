import { ItemImage } from "@/components/items";
import { Author } from "@/components/items/author";
import {
  SubtitleArticle,
  TagArticle,
  TitleArticle,
} from "@/components/typography";

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
        <TagArticle className="wPh">{tag}</TagArticle>
      </div>

      <TitleArticle>{title}</TitleArticle>
    </div>
    <div className="hiy">
      <SubtitleArticle>{subtitle}</SubtitleArticle>
      <Author className="atc" data={author}></Author>
    </div>
  </a>
);

export default CardArticle;
