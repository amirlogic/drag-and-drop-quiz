
import { Droppable, Draggable } from 'react-beautiful-dnd';  // , DragDropContextProps, DraggableDescriptor

interface ColumnContent {

    [key:string]:{ id:string, text:string, src:string, curcol:string, dstcol:string, validColor:string}[]
}

export const columnData:ColumnContent = {

  "foods":[
    { id:"radish", text:"Radieschen", src: "metacom/food/radieschen.jpg", curcol:"origin", dstcol:"vegetable", validColor: "lightSkyBlue" },
    { id:"grape", text:"Weintraube", src: "metacom/food/weintraubenrot.jpg", curcol:"origin", dstcol:"fruit", validColor: "lightSkyBlue" },
    { id:"chocolate", text:"Schokolade", src: "metacom/food/schokolade.jpg", curcol:"origin", dstcol:"sweets", validColor: "lightSkyBlue" },
  ]

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
              return (
                <Draggable key={row.id} draggableId={row.id} index={indx}>
                  {(gprovided, gsnapshot) => (
                    <div
                      ref={gprovided.innerRef}
                      {...gprovided.draggableProps}
                      {...gprovided.dragHandleProps}
                    >
                      <div
                        className="p-2 bg-blue-100 m-2"
                        style={{ backgroundColor: `${row.validColor}` }}
                      >
                        {row.text}
                        <img src={require(`./${row.src}`)} alt={row.text} height="200" width="200" />
                      </div>
                    </div>
                  )}
                </Draggable>
              );
              
      
            } ) }
      
          {provided.placeholder}

          </div>

        )}

      </Droppable>
    );
  }

export default Column;