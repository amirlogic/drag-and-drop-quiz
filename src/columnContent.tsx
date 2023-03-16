export interface ColumnContent {

    [key:string]:{ id:string, text:string, src:string, curcol:string, dstcol:string, validColor:string}[]
}

export const columnData:ColumnContent = {

  "foods": shuffle([
    { id:"radish", text:"Radieschen", src: "metacom/food/radieschen.jpg", curcol:"origin", dstcol:"vegetable", validColor: "lightSkyBlue" },
    { id:"grape", text:"Weintraube", src: "metacom/food/weintraubenrot.jpg", curcol:"origin", dstcol:"fruit", validColor: "lightSkyBlue" },
    { id:"chocolate", text:"Schokolade", src: "metacom/food/schokolade.jpg", curcol:"origin", dstcol:"sweets", validColor: "lightSkyBlue" },
  ]),
  "moods": shuffle([
    { id:"radish", text:"sch", src: "metacom/food/radieschen.jpg", curcol:"origin", dstcol:"vegetable", validColor: "lightSkyBlue" },
    { id:"grape", text:"adsf", src: "metacom/food/weintraubenrot.jpg", curcol:"origin", dstcol:"fruit", validColor: "lightSkyBlue" },
    { id:"chocolate", text:"ok", src: "metacom/food/schokolade.jpg", curcol:"origin", dstcol:"sweets", validColor: "lightSkyBlue" },
  ])
}


export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, 1);
}
