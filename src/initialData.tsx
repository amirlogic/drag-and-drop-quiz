import { Key } from "react";

interface StartData {
    [key: string]: StaticData
}

interface StaticData {
    elements: any | null | undefined;
    id: Key | null | undefined;
    title:string,
    text:string,
    src: string,
    cols:{id:string,name:string, src:string}[]
}

const initialData:StartData = {

    "foods":{ 
        id: "",
        elements: "",
        title:"Essen",
        text:"",
        src: "metacom/food/lebensmittel.jpg",
        cols:[
            { id:"vegetable", name:"Gemüse", src: "metacom/food/gemuese.jpg"},
            { id:"fruit", name:"Obst", src: "metacom/food/obst.jpg"},
            { id:"sweets", name:"Süßigkeiten", src: "metacom/food/suessigkeiten.jpg" }
            
        ] 
    }
}

export default initialData;