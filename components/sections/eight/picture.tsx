import { ItemImage } from "@/components/items";

const PictureEight = ({ data: { image } }: any) => (
  <div className="u4k">
    <div className="vmZ oL7 YOh">
      <ItemImage
        image={image}
        className="fpC XBl"
        sizes="(min-width:1025px) 2000px, (min-width:768px) 768px, 414px"
      />
    </div>
  </div>
);

export default PictureEight;
