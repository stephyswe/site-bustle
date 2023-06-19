import { Section } from "@/components/section";

const PosterWrapper = ({ title, children }: any) => (
  <Section cardNum={161523782}>
    <div className="bw8 TPM THO">
      <div className="de0">
        <div className="b3H">
          <div className="Mtx">
            <p>
              <a href="https://www.bustle.com/originals">{title}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="Uz3">{children}</div>
    </div>
  </Section>
);

export default PosterWrapper;
