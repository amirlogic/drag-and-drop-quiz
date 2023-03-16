export interface ColumnContent {

    [key:string]:{ id:string, text:string, src:string, curcol:string, dstcol:string, validColor:string}[]
}

export const columnData:ColumnContent = {

  "foods": shuffle([
    { id:"radish", text:"Radieschen", src: "metacom/food/radieschen.jpg", curcol:"origin", dstcol:"vegetable", validColor: "lightSkyBlue" },
    { id:"grape", text:"Weintraube", src: "metacom/food/weintraubenrot.jpg", curcol:"origin", dstcol:"fruit", validColor: "lightSkyBlue" },
    { id:"chocolate", text:"Schokolade", src: "metacom/food/schokolade.jpg", curcol:"origin", dstcol:"sweets", validColor: "lightSkyBlue" },
    {id: "apple", text: "Apfel", src: "metacom/food/apfel.jpg", curcol: "origin", dstcol: "fruit", validColor: "lightSkyBlue"},
    {id: "apricot", text: "Marille", src: "metacom/food/aprikose.jpg", curcol: "origin", dstcol: "fruit", validColor: "lightSkyBlue"},
    {id: "banana", text: "Banane", src: "metacom/food/banane.jpg", curcol: "origin", dstcol: "fruit", validColor: "lightSkyBlue"},
    // {id: "semmel", text: "Semmel", src: "metacom/food/broetchen.jpg", curcol: "origin", dstcol: "", validColor: "lightSkyBlue"},
    {id: "gummibaerchen", text: "Gummibärchen", src: "metacom/food/gummibaerchenbunt.jpg", curcol: "origin", dstcol: "sweets", validColor: "lightSkyBlue"},
    {id: "lettuce", text: "Kopfsalat", src: "metacom/food/kopfsalat.jpg", curcol: "origin", dstcol: "vegetable", validColor: "lightSkyBlue"},
    {id: "cake", text: "Kuchen", src: "metacom/food/kuchentorte.jpg", curcol: "origin", dstcol: "sweets", validColor: "lightSkyBlue"},
    {id: "melon", text: "Melone", src: "metacom/food/melone.jpg", curcol: "origin", dstcol: "fruit", validColor: "lightSkyBlue"},
    {id: "muffin", text: "Muffin", src: "metacom/food/muffin3.jpg", curcol: "origin", dstcol: "sweets", validColor: "lightSkyBlue"},
    {id: "tomato", text: "Tomate", src: "metacom/food/tomate.jpg", curcol: "origin", dstcol: "vegetable", validColor: "lightSkyBlue"},
    {id: "zuckerwatte", text: "Zuckerwatte", src: "metacom/food/zuckerwatte2.jpg", curcol: "origin", dstcol: "sweets", validColor: "lightSkyBlue"},

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
  return array.slice(0, 7);
}
