export default function cssToJs(cssStyle: string): { [key: string]: string } {
  const styleObject: { [key: string]: string } = {};
  const styleArray: string[] = cssStyle.split(";");

  for (let i = 0; i < styleArray.length; i++) {
    if (styleArray[i].includes(":")) {
      const stylePair: string[] = styleArray[i].split(":");
      const jsKey: string = stylePair[0].replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
      }); // Converts 'padding-top' to 'paddingTop'
      styleObject[jsKey.trim()] = stylePair[1].trim();
    }
  }

  return styleObject;
}
