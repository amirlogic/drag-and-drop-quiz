
interface StartData {
    [key: string]: StaticData
}

interface StaticData {
    title:string,
    text:string,
    src: string,
    cols:{id:string,name:string, src:string}[]
}

const initData:StartData = {

    "foods":{ 
        title:"Essen",
        text:"",
        src: "metacom/food/lebensmittel.jpg",
        cols:[
            { id:"vegetable", name:"Gemüse", src: "metacom/food/gemuese.jpg"},
            { id:"fruit", name:"Obst", src: "metacom/food/obst.jpg"},
            { id:"sweets", name:"Süßigkeiten", src: "metacom/food/suessigkeiten.jpg" }
            
        ] 
    },
    "moods":{ 
        title:"BLALALA",
        text:"",
        src: "metacom/food/radieschen.jpg",
        cols:[
            { id:"vegetable", name:"asdf", src: "metacom/food/radieschen.jpg" },
            { id:"fruit", name:"jklö", src: "metacom/food/radieschen.jpg" },
            { id:"sweets", name:"iajasdf", src: "metacom/food/radieschen.jpg" }
            
        ] 
    }

}

export default initData;