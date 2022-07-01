
import { Droppable, Draggable } from 'react-beautiful-dnd';  // , DragDropContextProps, DraggableDescriptor

interface ColumnContent {

    [key:string]:{ id:string, text:string, curcol:string, dstcol:string }[]
}

export const columnData:ColumnContent = {

    "musicbands":[
        { id:"abba", text:"ABBA", curcol:"origin", dstcol:"sweden" },
        { id:"beatles", text:"The Beatles", curcol:"origin", dstcol:"uk" },
        { id:"aob", text:"Ace of Base", curcol:"origin", dstcol:"sweden" },
        { id:"bep", text:"Black Eyed Peas", curcol:"origin", dstcol:"usa" },
        { id:"coldplay", text:"Coldplay", curcol:"origin", dstcol:"uk" },
        { id:"linkingpark", text:"Linking Park", curcol:"origin", dstcol:"usa" }
    ],

    "rockets":[
        { id:"f9", text:"Falcon 9", curcol:"origin", dstcol:"usa" },
        { id:"satv", text:"Saturn 5", curcol:"origin", dstcol:"usa" },
        { id:"soyuz", text:"Soyuz", curcol:"origin", dstcol:"ussr" },
        { id:"proton", text:"Proton", curcol:"origin", dstcol:"ussr" },
        { id:"ariane", text:"Ariane 5", curcol:"origin", dstcol:"eu" },
        { id:"vega", text:"Vega", curcol:"origin", dstcol:"eu" }
    ],

    "viruses":[
        { id:"sarscov2", text:"SARS CoV 2", curcol:"origin", dstcol:"rna" },
        { id:"hbv", text:"Hepatitis B", curcol:"origin", dstcol:"dna" },
        { id:"hcv", text:"Hepatitis C", curcol:"origin", dstcol:"rna" },
        { id:"rabies", text:"Rabies", curcol:"origin", dstcol:"rna" },
        { id:"hpv", text:"Human Pappillioma Virus", curcol:"origin", dstcol:"dna" },
        { id:"influenza", text:"Influenza", curcol:"origin", dstcol:"rna" },
        { id:"herpes", text:"Herpes", curcol:"origin", dstcol:"dna" }
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
      
              return <Draggable draggableId={row.id} index={indx}>
                      {(gprovided, gsnapshot) => (

                       <div 
                       ref={gprovided.innerRef}
                       {...gprovided.draggableProps}
                       {...gprovided.dragHandleProps} 
                       className="p-2 bg-blue-100 m-2">

                         {row.text}

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