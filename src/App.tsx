import React, { useState } from 'react';

import initData from './initData';
import Column, { columnData } from './columnContent';



function App() {

  const [ activeQuiz, setActiveQuiz ] = useState("musicbands");

  const [ colItems, setColItems ] = useState(columnData);

  const onQuizSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{

    setActiveQuiz(e.target.value);
  }

  const onCheckboxSwitch = (e:React.ChangeEvent<HTMLInputElement>)=>{

    if( e.target.checked ){

      let stack = colItems[activeQuiz];

      for( let i=0; i<stack.length; i++ ){

        stack[i].curcol = stack[i].dstcol;

      }

      let upstack = { activeQuiz:stack }

      setColItems( {...colItems,...upstack} );


    }
    else{

      let stack = colItems[activeQuiz];

      for( let i=0; i<stack.length; i++ ){

        stack[i].curcol = "origin";

      }

      let upstack = { activeQuiz:stack }

      setColItems( {...colItems,...upstack} );
    }

  }

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

      <div className="grid grid-cols-4 gap-4 mx-8 my-8">

        <Column id="origin" title="Start Here" track={activeQuiz} data={colItems} />

        { initData[activeQuiz].cols.map( (quizData) =>{

            return <Column id={quizData.id} title={quizData.name} track={activeQuiz} data={colItems} />
        }) }

      </div>
      
    </>
  );
}

export default App;
