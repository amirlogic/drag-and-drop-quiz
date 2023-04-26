import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './styles.module.css';

interface Item {
    id: string;
    content: string;
    number: number;
}

interface Props {
    id: string;
    items: Item[];
}

const ColumnWordSymbol: React.FC<Props> = ({ id, items }) => {
    const [selected, setSelected] = useState<Item | null>(null);

    const handleDragStart = (item: Item) => {
        setSelected(item);
    };

    const handleDragEnd = () => {
        setSelected(null);
    };

    const handleDrop = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, number: number) => {
        if (selected && selected.number === number) {
            console.log(`Dropped ${selected.content} on row ${number}`);
            // TODO: Update state to reflect the drop
        }
    };

    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div
                    className={styles.column}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                                <div
                                    className={styles.item}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    style={{ backgroundColor: selected === item ? 'yellow' : 'white' }}
                                    onMouseDown={() => handleDragStart(item)}
                                    onMouseUp={handleDragEnd}
                                >
                                    {/* <img src={schokolade} alt={item.content} /> */}
                                    <span>{item.content}</span>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    {[1, 2, 3, 4, 5].map((number) => (
                        <div
                            key={number}
                            className={styles.row}
                            onMouseUp={(event) => handleDrop(event, number)}
                        >
                            {number}
                        </div>
                    ))}
                </div>
            )}
        </Droppable>
    );
};

export default ColumnWordSymbol;
