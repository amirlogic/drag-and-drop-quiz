import { Droppable, Draggable } from 'react-beautiful-dnd';  // , DragDropContextProps, DraggableDescriptor
import { ColumnContent } from './columnContent';
import styles from './styles.module.css';

function Column(props: { id: string, title: string, src: string, track: string, data: ColumnContent, reveal: boolean }) {

    return (
        <Droppable droppableId={props.id}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} className={styles.column}>
                    <img className={styles.columnimg} src={require(`./${props.src}`)} alt={props.title}/>
                    <div className="text-center font-semibold m-2">{props.title}</div>
                    <div className={styles.linie} />
                    {props.data[props.track].filter((frow) => {
                        return frow.curcol === props.id;
                    }).map((row, indx) => {
                        return (
                            <Draggable key={row.id} draggableId={row.id} index={indx}>
                                {(gprovided, gsnapshot) => (
                                    <div ref={gprovided.innerRef} {...gprovided.draggableProps} {...gprovided.dragHandleProps}>
                                        <div className={styles.drop} style={{ backgroundColor: `${row.validColor}` }}>
                                            <img src={require(`./${row.src}`)} alt={row.text}/>
                                            {row.text}
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        );
                    })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}

export default Column;