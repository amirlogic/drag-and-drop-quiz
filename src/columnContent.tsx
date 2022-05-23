

interface ColumnContent {

    [key:string]:{ id:string, text:string, curcol:string, dstcol:string }[]
}

const ColumnData:ColumnContent = {

    "musicbands":[
        { id:"abba", text:"ABBA", curcol:"origin", dstcol:"sweden" },
        { id:"beatles", text:"The Beatles", curcol:"origin", dstcol:"uk" },
        { id:"aob", text:"Ace of Base", curcol:"sweden", dstcol:"sweden" },
    ],

    "rockets":[
        { id:"f9", text:"Falcon 9", curcol:"origin", dstcol:"usa" },
        { id:"satv", text:"Saturn 5", curcol:"origin", dstcol:"usa" },
        { id:"soyuz", text:"Soyuz", curcol:"origin", dstcol:"ussr" },
        { id:"proton", text:"Proton", curcol:"origin", dstcol:"ussr" },
        { id:"ariane", text:"Ariane 5", curcol:"origin", dstcol:"eu" },
    ],

    "viruses":[
        { id:"sarscov2", text:"SARS CoV 2", curcol:"origin", dstcol:"rna" },
        { id:"hbv", text:"Hepatitis B", curcol:"origin", dstcol:"dna" },
    ],

}

function Column( props:{id:string, title:string, track:string } ) {

    return (
  
      <div className="bg-slate-50">
  
        <div className="text-center font-semibold m-2">{props.title}</div>

        { ColumnData[props.track].filter( (frow)=>{

          return frow.curcol === props.id;

        } ).map( (row, indx)=>{
  
          return <div className="p-2 bg-blue-100 m-2">{row.text}</div>
  
        } ) }
  
      </div>
    );
  }

export default Column;