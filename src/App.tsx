import React, { useState } from 'react';
import { DragDropContext, DropResult, DragStart, DragUpdate } from 'react-beautiful-dnd';  // DragDropContextProps, DraggableDescriptor, 
import initData from './initData';
import { columnData } from './columnContent';
import Column from './Column';
import styles from './styles.module.css';
import schokolade from './metacom/food/schokolade.jpg'


function App() {


  const [activeQuiz, setActiveQuiz] = useState("foods");
  const [colItems, setColItems] = useState(columnData);
  const [reveal, setReveal] = useState(false);
  const [ , setCacheData] = React.useState();

  const onQuizSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveQuiz(e.target.value);
    addDataIntoCache('currentQuiz', 'https://localhost:3000', e.target.value);
  }


  const addDataIntoCache = (cacheName: string, url: RequestInfo | URL, response: string) => {
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      })
    }
  }
  
  // Function to get single cache data
  const getSingleCacheData = async (cacheName: string, url: RequestInfo | URL) => {
    if (typeof caches === 'undefined') return false;
    
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
    
    // If no cache exists
    if (!cachedResponse || !cachedResponse.ok) {
      // const [activeQuiz, setActiveQuiz] = useState("foods");
      console.log('No cache existing')
    }
  
    return cachedResponse!.json().then((item) => {
      setCacheData(item)
      // const [activeQuiz, setActiveQuiz] = useState(item);
    });
  };

  getSingleCacheData('https://localhost:3000', 'currentQuiz');


  const bgColors = {
    "Default": "#81b71a",
    "green": "#03a60f",
    "yellow": "#f2ba0f",
    "red": "#f22828",
    "blue": "#023e74",
    "beige": "#F6BB42",
    "turquise": "#8cd9d1"
  };


  function onCheckboxCorrectionSwitch() {
    console.log('true')
    setReveal(true);
    let stack = colItems[activeQuiz];

    for (let i = 0; i < stack.length; i++) {
      stack[i].curcol = stack[i].dstcol;
      stack[i].validColor = "yellowGreen";
    }

    let upstack = { activeQuiz: stack }
    setColItems({ ...colItems, ...upstack });

  }

  function onCheckboxStartOverSwitch() {
    setReveal(false);
    let stack = colItems[activeQuiz];
    for (let i = 0; i < stack.length; i++) {
      stack[i].curcol = "origin";
      stack[i].validColor = "lightSkyBlue";
    }
    let upstack = { activeQuiz: stack }
    setColItems({ ...colItems, ...upstack });
  }

  function onCheckboxStartNewGameSwitch() {
    // setReveal(false);
    // let stack = shuffle([...columnData[activeQuiz]]); // TODO: HERE
    // for (let i = 0; i < stack.length; i++) {
    //   stack[i].curcol = "origin";
    //   stack[i].validColor = "lightSkyBlue";
    // }
    // // let upstack = { activeQuiz: stack }
    // // setColItems({ ...colItems, ...upstack });
    // let updatedData = { ...columnData, [activeQuiz]: stack }; // update the shuffled quiz items in columnData
    // setColItems(updatedData);
    window.location.reload();

  }

  function onCheckboxValidSwitch() {
    let stack = colItems[activeQuiz];
    let updatedStack = [];

    for (let i = 0; i < stack.length; i++) {
      let item = stack[i];
      if (item.curcol === item.dstcol) {
        item.validColor = 'yellowGreen';
      } else {
        item.validColor = 'tomato';
      }
      updatedStack.push(item);
    }

    let upstack = { activeQuiz: updatedStack }
    setColItems({ ...colItems, ...upstack });
  }

  const onBeforeCapture = () => {
    console.log("Before Capture");
  };
  const onBeforeDragStart = () => {
    console.log("Before Drag Start");
  };
  const onDragStart = (startobj: DragStart) => {
    console.log(startobj);
  };
  const onDragUpdate = (updateobj: DragUpdate) => {
    console.log(updateobj);

  };
  const onDragEnd = (result: DropResult) => {

    let { source, destination, draggableId } = result;

    if (!destination) {
      console.log("destination is not valid");
      return;
    }

    if (destination.droppableId === source.droppableId) {
      console.log("no change");
      return;
    }
    let stack = colItems[activeQuiz];
    for (let i = 0; i < stack.length; i++) {
      if (stack[i].id === draggableId) {
        stack[i].curcol = destination.droppableId;
      }
    }
    let upstack = { activeQuiz: stack }
    setColItems({ ...colItems, ...upstack });

  };

  return (

    <div className={styles.back}>

      <div className={styles.header} id="header">
        <select id="dropDown" className={styles.dropdown} style={{ float: 'left' }} onChange={onQuizSelect}>
          {Object.keys(initData).map((quiz: string) => {
            return (
              <option key={quiz} value={quiz} style={{ backgroundImage: `url(${schokolade})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '40px' }}>
                {initData[quiz].title}
              </option>
            );
          })}
        </select>
        <div id="title" className={styles.headertitle}>{initData[activeQuiz].title}</div>
      </div>

      <div className="p-2 text-xl">
        <button className={styles.btn} style={{ backgroundColor: bgColors.green }} onClick={onCheckboxValidSwitch}>Alles richtig?</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.yellow }} onClick={onCheckboxCorrectionSwitch}>Korrektur</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.red, marginRight: 'auto', float: 'right' }} onClick={onCheckboxStartOverSwitch}>Neustart</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.blue, marginRight: 'auto', float: 'right' }} onClick={onCheckboxStartNewGameSwitch}>Neues Spiel</button>
      </div>

      <div className="p-2 text-lg">
        {initData[activeQuiz].text}
      </div>

      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >

        <div className="grid grid-cols-4 gap-4 mx-8 my-8">

          <Column id="origin" title="Start" track={activeQuiz} data={colItems} reveal={reveal} />
          {initData[activeQuiz].cols.map((quizData) => {
            return <Column id={quizData.id} title={quizData.name} track={activeQuiz} data={colItems} reveal={reveal} />
          })}

        </div>

      </DragDropContext>

    </div>
  );
}

export default App;
