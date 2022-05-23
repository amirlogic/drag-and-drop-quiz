

interface ColumnContent {

    [key:string]:{ id:string, text:string, curcol:string, dstcol:string }[]
}

const ColumnData:ColumnContent = {

    "musicbands":[
        { id:"abba", text:"ABBA", curcol:"origin", dstcol:"sweden" },
    ],

    "rockets":[
        { id:"f9", text:"Falcon 9", curcol:"origin", dstcol:"usa" },
    ],

    "viruses":[
        { id:"sarscov2", text:"SARS CoV 2", curcol:"origin", dstcol:"rna" },
    ],

}

function Column( props:{id:string, title:string, track:string } ) {

    return (
  
      <>
  
        <div>{props.title}</div>

        { ColumnData[props.track].filter( (frow)=>{

          return frow.curcol === props.id;

        } ).map( (row)=>{
  
          return <div>{row.text}</div>
  
        } ) }
  
      </>
    );
  }

export default Column;