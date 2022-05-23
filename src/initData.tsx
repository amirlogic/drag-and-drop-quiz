
interface StartData {
    [key: string]: StaticData
}

interface StaticData {
    title:string,
    text:string,
    cols:{id:string,name:string}[]
}

const initData:StartData = {

    "musicbands":{ 
        title:"Music bands",
        text:"Drag music bands to their corresponding country",
        cols:[
            { id:"uk", name:"UK" },
            { id:"usa", name:"USA" },
            { id:"se", name:"Sweden" }
        ] 
    },

    "rockets":{ 
        title:"Rockets",
        text:"Match rocket launchers to their corresponding country",
        cols:[
            { id:"eu", name:"EU" },
            { id:"usa", name:"USA" },
            { id:"ussr", name:"USSR" }
        ] 
    },

}

export default initData;