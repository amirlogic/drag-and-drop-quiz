export interface ColumnContent {

    [key:string]:{ id:string, text:string, src:string, curcol:string, dstcol:string, validColor:string}[]
}

export const columnData:ColumnContent = {

  "foods":[
    { id:"radish", text:"Radieschen", src: "metacom/food/radieschen.jpg", curcol:"origin", dstcol:"vegetable", validColor: "lightSkyBlue" },
    { id:"grape", text:"Weintraube", src: "metacom/food/weintraubenrot.jpg", curcol:"origin", dstcol:"fruit", validColor: "lightSkyBlue" },
    { id:"chocolate", text:"Schokolade", src: "metacom/food/schokolade.jpg", curcol:"origin", dstcol:"sweets", validColor: "lightSkyBlue" },
  ]

}