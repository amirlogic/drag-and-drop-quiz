export interface ColumnContent {

    [key:string]:{ id:string, text:string, src:string, curcol:string, dstcol:string, curindex: number, validColor:string}[]
}

export const columnData:ColumnContent = {

  "foods": shuffle([
    { id:"radish", text:"Radieschen", src: "metacom/food/radieschen.jpg", curcol:"origin", dstcol:"vegetable", curindex: 0, validColor: "lightSkyBlue" },
    { id:"grape", text:"Weintraube", src: "metacom/food/weintraubenrot.jpg", curcol:"origin", dstcol:"fruit", curindex: 0, validColor: "lightSkyBlue" },
    { id:"chocolate", text:"Schokolade", src: "metacom/food/schokolade.jpg", curcol:"origin", dstcol:"sweets", curindex: 0, validColor: "lightSkyBlue" },
    {id: "apple", text: "Apfel", src: "metacom/food/apfel.jpg", curcol: "origin", dstcol: "fruit", curindex: 0, validColor: "lightSkyBlue"},
    {id: "apricot", text: "Marille", src: "metacom/food/aprikose.jpg", curcol: "origin", dstcol: "fruit", curindex: 0, validColor: "lightSkyBlue"},
    {id: "banana", text: "Banane", src: "metacom/food/banane.jpg", curcol: "origin", dstcol: "fruit", curindex: 0, validColor: "lightSkyBlue"},
    // {id: "semmel", text: "Semmel", src: "metacom/food/broetchen.jpg", curcol: "origin", dstcol: "", validColor: "lightSkyBlue"},
    {id: "gummibaerchen", text: "Gummibärchen", src: "metacom/food/gummibaerchenbunt.jpg", curcol: "origin", dstcol: "sweets", curindex: 0, validColor: "lightSkyBlue"},
    {id: "lettuce", text: "Kopfsalat", src: "metacom/food/kopfsalat.jpg", curcol: "origin", dstcol: "vegetable", curindex: 0, validColor: "lightSkyBlue"},
    {id: "cake", text: "Kuchen", src: "metacom/food/kuchentorte.jpg", curcol: "origin", dstcol: "sweets", curindex: 0, validColor: "lightSkyBlue"},
    {id: "melon", text: "Melone", src: "metacom/food/melone.jpg", curcol: "origin", dstcol: "fruit", curindex: 0, validColor: "lightSkyBlue"},
    {id: "muffin", text: "Muffin", src: "metacom/food/muffin3.jpg", curcol: "origin", dstcol: "sweets", curindex: 0, validColor: "lightSkyBlue"},
    {id: "tomato", text: "Tomate", src: "metacom/food/tomate.jpg", curcol: "origin", dstcol: "vegetable", curindex: 0, validColor: "lightSkyBlue"},
    {id: "zuckerwatte", text: "Zuckerwatte", src: "metacom/food/zuckerwatte2.jpg", curcol: "origin", dstcol: "sweets", curindex: 0, validColor: "lightSkyBlue"},

  ]),
  "transport": shuffle([
    { id:"car", text:"Auto", src: "metacom/transport/auto2.jpg", curcol:"origin", dstcol:"land", curindex: 0, validColor: "lightSkyBlue" },
    { id:"bulldozer", text:"Bulldozer", src: "metacom/transport/bulldozer.jpg", curcol:"origin", dstcol:"land", curindex: 0, validColor: "lightSkyBlue" },
    { id:"bus", text:"Bus", src: "metacom/transport/bus1.jpg", curcol:"origin", dstcol:"land", curindex: 0,validColor: "lightSkyBlue" },    
    { id:"airplane", text:"Flugzeug", src: "metacom/transport/flugzeugSW.jpg", curcol:"origin", dstcol:"luft", curindex: 0, validColor: "lightSkyBlue" },
    { id:"bike", text:"Fahrrad", src: "metacom/transport/fahrradSW.jpg", curcol:"origin", dstcol:"land", curindex: 0, validColor: "lightSkyBlue" },
    { id:"ship1", text:"Transportschiff", src: "metacom/transport/kahnSW.jpg", curcol:"origin", dstcol:"wasser", curindex: 0,validColor: "lightSkyBlue" },    
    { id:"airplanes", text:"Luftfahrzeuge", src: "metacom/transport/luftfahrzeuge.jpg", curcol:"origin", dstcol:"luft", curindex: 0, validColor: "lightSkyBlue" },
    { id:"maehdraescher", text:"Mähdrescher", src: "metacom/transport/maehdrescher.jpg", curcol:"origin", dstcol:"land", curindex: 0, validColor: "lightSkyBlue" },
    { id:"schlauchboot", text:"Schlauchboot", src: "metacom/transport/schlauchboot.jpg", curcol:"origin", dstcol:"wasser", curindex: 0,validColor: "lightSkyBlue" },
    { id:"segelschiff", text:"Segelschiff", src: "metacom/transport/segelschiffalt.jpg", curcol:"origin", dstcol:"wasser", curindex: 0,validColor: "lightSkyBlue" },
    { id:"uboot", text:"U-Boot", src: "metacom/transport/uboot2.jpg", curcol:"origin", dstcol:"sweets", curindex: 0,validColor: "lightSkyBlue" },
    { id:"wohnmobil", text:"Wohnmobil", src: "metacom/transport/wohnmobil.jpg", curcol:"origin", dstcol:"land", curindex: 0,validColor: "lightSkyBlue" },
    { id:"subway", text:"U-Bahn", src: "metacom/transport/ubahn.jpg", curcol:"origin", dstcol:"land", curindex: 0,validColor: "lightSkyBlue" },
    { id:"train", text:"Zug", src: "metacom/transport/zug2.jpg", curcol:"origin", dstcol:"land", curindex: 0,validColor: "lightSkyBlue" },
    { id:"yacht", text:"Yacht", src: "metacom/transport/yacht.jpg", curcol:"origin", dstcol:"wasser", curindex: 0,validColor: "lightSkyBlue" },
    { id:"seilbahn", text:"Seilbahn", src: "metacom/transport/seilbahnSW.jpg", curcol:"origin", dstcol:"luft", curindex: 0,validColor: "lightSkyBlue" },
  ])
}


export function shuffle<T>(array: T[], startIndex: number = 0): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, 7).map((obj, index) => ({ ...obj, curindex: startIndex + index }));
}
