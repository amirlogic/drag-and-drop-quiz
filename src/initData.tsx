
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
        text:"Drag music groups to their corresponding country of origin",
        cols:[
            { id:"uk", name:"UK" },
            { id:"usa", name:"USA" },
            { id:"sweden", name:"Sweden" }
        ] 
    },

    "rockets":{ 
        title:"Rockets",
        text:"Match rocket launchers to their corresponding country of origin",
        cols:[
            { id:"eu", name:"EU" },
            { id:"usa", name:"USA" },
            { id:"ussr", name:"USSR / Russia" }
        ] 
    },

    "viruses":{ 
        title:"Viruses",
        text:"Match rocket launchers to their corresponding country of origin",
        cols:[
            { id:"rna", name:"RNA" },
            { id:"dna", name:"DNA" }
            
        ] 
    },

}

export default initData;