
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
    },
    "moods":{ 
        title:"BLALALA",
        text:"",
        cols:[
            { id:"vegetable", name:"asdf" },
            { id:"fruit", name:"jklö" },
            { id:"sweets", name:"iajasdf" }
            
        ] 
    }

}

export default initData;