import React, { useState } from 'react';
import { DragDropContext, DropResult, DragDropContextProps, DraggableDescriptor, DragStart, DragUpdate } from 'react-beautiful-dnd';
import initData from './initData';
import Column, { columnData } from './columnContent';



function App() {

  const [ activeQuiz, setActiveQuiz ] = useState("musicbands");

  const [ colItems, setColItems ] = useState(columnData);

  const [ reveal, setReveal ] = useState(false);

  const onQuizSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{

    setActiveQuiz(e.target.value);
  }

  const onCheckboxSwitch = (e:React.ChangeEvent<HTMLInputElement>)=>{

    if( e.target.checked ){

      setReveal(true);
      let stack = colItems[activeQuiz];

      for( let i=0; i<stack.length; i++ ){

        stack[i].curcol = stack[i].dstcol;

      }

      let upstack = { activeQuiz:stack }

      setColItems( {...colItems,...upstack} );


    }
    else{

      setReveal(false);
      let stack = colItems[activeQuiz];

      for( let i=0; i<stack.length; i++ ){

        stack[i].curcol = "origin";

      }

      let upstack = { activeQuiz:stack }

      setColItems( {...colItems,...upstack} );
    }

  }

  const onBeforeCapture = () => { 
    console.log( "Before Capture" );
  };
  const onBeforeDragStart = () => { 
    console.log( "Before Drag Start" );
  };
  const onDragStart = (startobj:DragStart) => { 
    console.log(startobj);
  };
  const onDragUpdate = (updateobj:DragUpdate) => {
    console.log(updateobj);
    
  };
  const onDragEnd = (result:DropResult) => {

    let { source, destination, draggableId } = result;

    if(!destination){
      console.log("destination is not valid");
      return;
    }

    if(destination.droppableId===source.droppableId){
      console.log("no change");
      return;
    }

    let stack = colItems[activeQuiz];

      for( let i=0; i<stack.length; i++ ){

        if( stack[i].id === draggableId ){

          stack[i].curcol = destination.droppableId;
        }
        
      }

      let upstack = { activeQuiz:stack }

      setColItems( {...colItems,...upstack} );


    /* 
    let [draggableText] = listData.splice(source.index,1);
    listData.splice(destination.index,0,draggableText);

    setLiveLog( JSON.stringify(result,null,"\t") );
    //console.log(result); */
  };

  return (

    <>
      
      <div className="p-2 text-xl">
        <select onChange={onQuizSelect}>
        { Object.keys(initData).map( (quiz:string)=>{

          return <option value={quiz}>{initData[quiz].title}</option>;
        }) }
        </select>
        <input type="checkbox" onChange={onCheckboxSwitch} /> Correction
      </div>

      <div className="p-2 text-lg">
        { initData[activeQuiz].text }
      </div>

    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >

      <div className="grid grid-cols-4 gap-4 mx-8 my-8">

        <Column id="origin" title="Start Here" track={activeQuiz} data={colItems} />

        { initData[activeQuiz].cols.map( (quizData) =>{

            return <Column id={quizData.id} title={quizData.name} track={activeQuiz} data={colItems} />
        }) }

      </div>

    </DragDropContext>

    </>
  );
}

export default App;
