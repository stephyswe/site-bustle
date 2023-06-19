import cn from "classnames";
import { useState } from "react";

import { Section } from "@/components/section";
import SectionTwoContent from "@/components/sections/two/content";
import { InputRadio } from "@/components/sections/two/inputRadio";
import { Label } from "@/components/sections/two/label";

const SectionTwo = ({ data }: any) => {
  const [isChecked, setChecked] = useState("01");
  const onClick = (e: any) => setChecked(e);
  const onCheck = (number: string) => {
    return isChecked === number;
  };
  return (
    <Section cardNum={161523780}>
      <div className="A_V">
        <InputRadio onChecked={onCheck("01")} className="Iv6" />
        <InputRadio onChecked={onCheck("02")} className="c3V" />
        <InputRadio onChecked={onCheck("03")} className="m_5" />
        <InputRadio onChecked={onCheck("04")} className="jdg" />
        <div className="nig">
          {data.map(({ mobileClassName, num, label }: any, index: number) => (
            <Label
              onClick={onClick}
              key={index}
              numIndex={index}
              num={num}
              className={mobileClassName}
              title={label}
            />
          ))}
        </div>
        <div className="brJ">
          {data.map(({ className, num, data, label }: any) => (
            <div key={className} className={cn(`moS ${className}`)}>
              <SectionTwoContent
                onClick={onClick}
                num={num}
                data={data}
                label={label}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SectionTwo;
