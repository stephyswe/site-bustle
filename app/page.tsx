import SectionBase from "@/components/sections";
import jsonData from "@/constants/newdata/data.json";

import { Logo } from "../components/logo";
import data from "../constants/data";

interface DataSectionOne {
  left: any; // Replace 'any' with the actual type
}

interface MyData {
  dataSectionOne: DataSectionOne;
  [key: string]: any; // This allows for additional, unknown properties
}

let importData = data as MyData; // your data object
let jsonDataImport = jsonData as MyData; // your JSON data

const mergedData: MyData = {
  ...importData,
  dataSectionOne: {
    ...importData.dataSectionOne,
    left: jsonDataImport.dataSectionOne.left,
  },
};

console.log("data", mergedData);

export default function Home() {
  return (
    <div>
      <Logo />
      <SectionBase data={mergedData} />
    </div>
  );
}
