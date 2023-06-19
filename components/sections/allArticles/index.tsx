import CardArticle from "@/components/card/article";
import { Section } from "@/components/section";

const SectionAllArticles = ({ data }: any) => (
  <Section cardNum={161523781}>
    <div className="bw8 tTD">
      <div className="fjo">
        <div className="Ouv">
          {data.map((item: any) => (
            <CardArticle key={item.title} data={item} />
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default SectionAllArticles;
