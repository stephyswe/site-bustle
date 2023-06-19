import { ItemImage } from "@/components/items";

const CardSectionSixPicture = ({ data: { image, imageAlt } }: any) => (
  <div className="hJa">
    <div className="vmZ oL7">
      <ItemImage sizesNum="248" image={image} className="fpC" />
    </div>
    <span className="Vms Vo4">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.genesis.com/us/en/2023/genesis-g90.html"
      >
        {imageAlt}
      </a>
    </span>
  </div>
);

export default CardSectionSixPicture;
