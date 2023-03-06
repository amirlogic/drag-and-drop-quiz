
import { Droppable, Draggable } from 'react-beautiful-dnd';  // , DragDropContextProps, DraggableDescriptor
import schokolade from './metacom/food/schokolade.jpg';

interface ColumnContent {

    [key:string]:{ id:string, text:string, src:string, curcol:string, dstcol:string }[]
}

export const columnData:ColumnContent = {

    "musicbands":[
        { id:"abba", text:"ABBA", src: "", curcol:"origin", dstcol:"sweden" },
        { id:"beatles", text:"The Beatles", src: "", curcol:"origin", dstcol:"uk" },
        { id:"aob", text:"Ace of Base", src: "", curcol:"origin", dstcol:"sweden" },
        { id:"bep", text:"Black Eyed Peas", src: "", curcol:"origin", dstcol:"usa" },
        { id:"coldplay", text:"Coldplay", src: "", curcol:"origin", dstcol:"uk" },
        { id:"linkingpark", text:"Linking Park", src: "", curcol:"origin", dstcol:"usa" }
    ],

    "rockets":[
        { id:"f9", text:"Falcon 9", src: "", curcol:"origin", dstcol:"usa" },
        { id:"satv", text:"Saturn 5", src: "", curcol:"origin", dstcol:"usa" },
        { id:"soyuz", text:"Soyuz", src: "", curcol:"origin", dstcol:"ussr" },
        { id:"proton", text:"Proton", src: "", curcol:"origin", dstcol:"ussr" },
        { id:"ariane", text:"Ariane 5", src: "", curcol:"origin", dstcol:"eu" },
        { id:"vega", text:"Vega", src: "", curcol:"origin", dstcol:"eu" }
    ],

    "viruses":[
      { id:"sarscov2", text:"SARS CoV 2", src: "", curcol:"origin", dstcol:"rna" },
      { id:"hbv", text:"Hepatitis B", src: "", curcol:"origin", dstcol:"dna" },
      { id:"hcv", text:"Hepatitis C", src: "", curcol:"origin", dstcol:"rna" },
      { id:"rabies", text:"Rabies", src: "", curcol:"origin", dstcol:"rna" },
      { id:"hpv", text:"Human Pappillioma Virus", src: "", curcol:"origin", dstcol:"dna" },
      { id:"influenza", text:"Influenza", src: "", curcol:"origin", dstcol:"rna" },
      { id:"herpes", text:"Herpes", src: "", curcol:"origin", dstcol:"dna" }
    ],

    "foods":[
      { id:"radish", text:"Radieschen", src: "metacom/food/radieschen.jpg", curcol:"origin", dstcol:"vegetable" },
      { id:"grape", text:"Weintraube", src: "metacom/food/weintraubenrot.jpg", curcol:"origin", dstcol:"fruit" },
      { id:"chocolate", text:"Schokolade", src: "metacom/food/schokolade.jpg", curcol:"origin", dstcol:"sweets" },
],

}



function Column( props:{id:string, title:string, track:string, data:ColumnContent, reveal:boolean } ) {

    return (
  
      <Droppable droppableId={props.id}>

        {(provided, snapshot) => (

          <div ref={provided.innerRef} className="bg-slate-50">
      
            <div className="text-center font-semibold m-2">{props.title}</div>

            { props.data[props.track].filter( (frow)=>{

              return frow.curcol === props.id;
              

            } ).map( (row, indx)=>{
              console.log(row)
              console.log(row.src)
              console.log(`./${row.src}`)
              return <Draggable draggableId={row.id} index={indx}>
                      {(gprovided, gsnapshot) => (

                       <div 
                       ref={gprovided.innerRef}
                       {...gprovided.draggableProps}
                       {...gprovided.dragHandleProps} 
                       className="p-2 bg-blue-100 m-2">

                         {row.text}
                         <img src={require(`./${row.src}`)} alt={row.text} height="200" width="200"/>
                       </div>

                      )}
                     </Draggable>
      
            } ) }
      
          {provided.placeholder}

          </div>

        )}

      </Droppable>
    );
  }

export default Column;