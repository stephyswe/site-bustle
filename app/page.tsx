import SectionBase from "@/components/sections";
import jsonData from "@/constants/newdata/data.json";

import { Logo } from "../components/logo";
import data from "../constants/data";

interface DataSectionOne {
  left: any; // Replace 'any' with the actual type
  middle: any; // Replace 'any' with the actual type
  right: any; // Replace 'any' with the actual type
}

interface MyData {
  dataSectionOne: DataSectionOne;
  dataSectionTwo: any; // Replace 'any' with the actual type
  [key: string]: any; // This allows for additional, unknown properties
}

let importData = data as MyData; // your data object
let jsonDataImport = jsonData as MyData; // your JSON data

const mergedData: MyData = {
  ...importData,
  dataSectionOne: {
    ...importData.dataSectionOne,
    left: jsonDataImport.dataSectionOne.left,
    middle: jsonDataImport.dataSectionOne.middle,
    right: jsonDataImport.dataSectionOne.right,
  },
  dataSectionTwo: jsonDataImport.dataSectionTwo,
};

export default function Home() {
  return (
    <div>
      <Logo />
      <SectionBase data={mergedData} />
    </div>
  );
}
