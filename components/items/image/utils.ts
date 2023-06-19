import { urlSite } from "../../../constants/api";

export function handleUrlSite(urlSite: any, srcFolder: any) {
  let orgUrlSite = urlSite;
  if (srcFolder)
    orgUrlSite = `${orgUrlSite.replace("/image", "")}/${srcFolder}`;
  return orgUrlSite;
}

export function handleSrcSet(srcSets: any, srcFolder: any, src: any) {
  let emptySrcSet: any[] = [];
  srcSets.forEach((element: any) => {
    let newSrc;
    if (!src.includes("https://")) {
      newSrc = handleUrlSite(urlSite, srcFolder) + src;
    } else newSrc = src;
    emptySrcSet.push(newSrc + element);
  });
  return emptySrcSet.join("");
}

export function handleSrc(src: string, srcFolder: any, srcCompress: any) {
  let orgSrc = src;
  if (!src.includes("https://")) {
    orgSrc = handleUrlSite(urlSite, srcFolder) + src;
  } else {
    orgSrc = src;
  }

  if (srcCompress && !src.includes("(min-width")) {
    orgSrc = orgSrc + caseCompress(orgSrc, srcCompress);
  }

  return orgSrc;
}

export function caseSizes(sizesNum: any) {
  switch (sizesNum) {
    case "123":
      return "(min-width:1025px) 215px, (min-width:768px) 215px, 123px";
    case "195":
      return "(min-width:1025px) 240px, (min-width:768px) 260px, 195px";
    case "196":
      return "(min-width:1025px) 216px, (min-width:768px) 206px, 196px";
    case "197":
      return "(min-width:1025px) 540px, (min-width:768px) 342px, 197px";
    case "248":
      return "(min-width:1025px) 800px, (min-width:768px) 614px, 248px";
    case "374":
      return "(min-width:1025px) 492px, (min-width:768px) 452px, 374px";

    default:
      return sizesNum;
  }
}

export function caseCompress(orgSrc: any, srcCompress: any) {
  switch (srcCompress) {
    case "215":
      return "?w=215&amp;h=215&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress";
    case "216":
      return "?w=216&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.504&fp-y=0.453";

    case "216b":
      return "?w=216&fit=crop&crop=faces&auto=format%2Ccompress";

    case "216c":
      return "?w=216&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5747&fp-y=0.6693";

    case "240":
      return "?w=240&fit=crop&crop=faces&auto=format%2Ccompress";

    case "492":
      return "?w=492&amp;h=492&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress";

    case "492b":
      return "?w=492&h=492&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.692&fp-y=0.2978";

    case "540":
      return "?w=540&amp;h=405&amp;fit=crop&amp;crop=faces&amp;auto=format%2Ccompress";

    case "540b":
      return "?w=540&h=405&fit=crop&crop=faces&auto=format%2Ccompress";

    case "800":
      return "?w=800&fit=crop&crop=faces&auto=format%2Ccompress";

    case "2000":
      return "?w=2000&amp;h=640&amp;fit=crop&amp;crop=focalpoint&amp;auto=format%2Ccompress&amp;fp-x=0.592&amp;fp-y=0.2623";
    default:
      return orgSrc;
  }
}
