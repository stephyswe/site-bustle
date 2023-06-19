import { Section } from "@/components/section";
import { ButtonSubmit } from "@/components/sections/newsletter/ButtonSubmit";
import { FormGet } from "@/components/sections/newsletter/FormGet";
import { InputEmail } from "@/components/sections/newsletter/inputEmail";

const SectionNewsLetter = ({ data: { title, subtitle, submit } }: any) => (
  <Section cardNum={161523761}>
    <div className="j1J sK1">
      <div className="lV1">
        <div className="yLP">
          <div className="bHV">
            <TitleNewsLetter>{title}</TitleNewsLetter>
            <SubtitleNewsLetter>{subtitle}</SubtitleNewsLetter>
            <FormGet action="https://newsletter.bustle.com/signup">
              <input name="site" type="hidden" value="BUSTLE" />
              <input name="source" type="hidden" value="NewsletterCard" />
              <input name="primaryNewsletter" type="hidden" value="bustle" />
              <div className="r-Z">
                <div className="mI6">
                  <InputEmail />
                </div>
                <ButtonSubmit>{submit}</ButtonSubmit>
              </div>
            </FormGet>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const TitleNewsLetter = ({ children }: any) => (
  <h1 className="wqK">{children}</h1>
);

const SubtitleNewsLetter = ({ children }: any) => (
  <div className="EFv">
    <p>{children}</p>
  </div>
);

export default SectionNewsLetter;
