
interface StartData {
    [key: string]: StaticData
}

interface StaticData {
    title:string,
    text:string,
    cols:{id:string,name:string}[]
}

const initData:StartData = {

    "foods":{ 
        title:"Essen",
        text:"",
        cols:[
            { id:"vegetable", name:"Gemüse" },
            { id:"fruit", name:"Obst" },
            { id:"sweets", name:"Süßigkeiten" }
            
        ] 
    }

}

export default initData;