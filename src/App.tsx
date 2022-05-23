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
      
      <div><select onChange={onQuizSelect}>
        { Object.keys(initData).map( (quiz:string)=>{

          return <option value={quiz}>{initData[quiz].title}</option>;
        }) }
        </select></div>

      <div className="">
        { initData[activeQuiz].text }
      </div>

      <Column id="origin" title="Start Here" track={activeQuiz} />

      { initData[activeQuiz].cols.map( (quizData) =>{

          return <div>{ quizData.name }</div>
      }) }
      
    </>
  );
}

export default App;
