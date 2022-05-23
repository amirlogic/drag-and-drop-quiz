import React, { ReactEventHandler, useState } from 'react';

import initData from './initData';
import Column from './columnContent';



function App() {

  const [ activeQuiz, setActiveQuiz ] = useState("musicbands");

  //const [ colItems, setColItems ] = useState(columnData);

  const onQuizSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{

    setActiveQuiz(e.target.value);
  }

  return (

    <>
      
      <div className="p-2 text-xl"><select onChange={onQuizSelect}>
        { Object.keys(initData).map( (quiz:string)=>{

          return <option value={quiz}>{initData[quiz].title}</option>;
        }) }
        </select></div>

      <div className="p-2 text-lg">
        { initData[activeQuiz].text }
      </div>

      <div className="grid grid-cols-4 gap-4 mx-8 my-8">

        <Column id="origin" title="Start Here" track={activeQuiz} />

        { initData[activeQuiz].cols.map( (quizData) =>{

            return <Column id={quizData.id} title={quizData.name} track={activeQuiz} />
        }) }

      </div>
      
    </>
  );
}

export default App;
