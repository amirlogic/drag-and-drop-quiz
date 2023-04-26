import { Droppable, Draggable } from 'react-beautiful-dnd';
import { ColumnContent } from './columnContent';
import styles from './styles.module.css';

function Row(props: { id: string, title: string, src: string, track: string, data: ColumnContent, reveal: boolean }) {
  const filteredRows = props.data[props.track].filter((frow) => {
    return frow.curcol === props.id;
  });
  const sortedRows = filteredRows.sort((a, b) => a.curindex - b.curindex);

  return (
    <Droppable droppableId={props.id}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} className={styles.row}>
          <div style={{ display: 'flex' }}>
            <div className="text-center font-semibold m-2">
              {props.title}
            </div>
            <div className={styles.seperationline} />
            {sortedRows.map((row, indx) => {
              return (
                <Draggable key={row.id} draggableId={row.id} index={indx}>
                  {(gprovided, gsnapshot) => (
                    <div ref={gprovided.innerRef} {...gprovided.draggableProps} {...gprovided.dragHandleProps}>
                      <div className={styles.droprow} style={{ backgroundColor: `${row.validColor}` }}>
                        <img src={require(`./${row.src}`)} />
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>

  );
}

export default Row;
