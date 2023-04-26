import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import initData from './initData';
import { DragDropContext, DropResult, DragStart, DragUpdate } from 'react-beautiful-dnd';  // DragDropContextProps, DraggableDescriptor, 
import React, { useState } from 'react';
import { columnData } from './columnContent';
import Row from './Row';
import Column from './Column';

function AppWordSymbolCombination(): JSX.Element {
  const [activeQuiz, setActiveQuiz] = useState("foods");
  const [colItems, setColItems] = useState(columnData);
  const [reveal, setReveal] = useState(false);
  const [, setCacheData] = React.useState();

  
  const onQuizSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveQuiz(e.target.value);
    addDataIntoCache('currentQuiz', 'http://localhost:3000', e.target.value);
  }

  const addDataIntoCache = (cacheName: string, url: RequestInfo | URL, response: string) => {
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      })
    }
  }

  // const onQuizSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setActiveQuiz(e.target.value);
  //   addDataIntoCache('currentQuiz', 'http://localhost:3000', e.target.value);
  // }


  // const addDataIntoCache = (cacheName: string, url: RequestInfo | URL, response: string) => {
  //   const data = new Response(JSON.stringify(response));
  //   if ('caches' in window) {
  //     caches.open(cacheName).then((cache) => {
  //       cache.put(url, data);
  //     })
  //   }
  // }

// Function to get single cache data
const getSingleCacheData = async (cacheName: string, url: RequestInfo | URL) => {
  if (typeof caches === 'undefined') return false;

  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  // If no cache exists
  if (typeof cachedResponse !== 'undefined' && cachedResponse !== null && typeof cachedResponse.json === 'function') {
    const data = await cachedResponse.json();
    setCacheData(data);
    return data;
  } else {
    console.log('cachedResponse is not in the expected format');
    return null;
  }
};

getSingleCacheData('http://localhost:3000', 'currentQuiz');



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
      stack[i].curcol = stack[i].id;
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
    window.location.reload();
  }

  function onCheckboxValidSwitch() {
    let stack = colItems[activeQuiz];
    let updatedStack = [];

    console.log(stack)

    for (let i = 0; i < stack.length; i++) {
      let item = stack[i];
      console.log(item)
      if (item.curcol === item.id) {
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
    let { destination, draggableId } = result;

    if (!destination) {
      return;
    }

    const stack = colItems[activeQuiz];
    if (destination.droppableId !== 'origin' && stack.some((item) => item.curcol === destination!.droppableId)) {
      return;
    }

    const itemIndex = stack.findIndex((item) => item.id === draggableId);
    if (itemIndex !== -1) {
      stack[itemIndex].curcol = destination.droppableId;
      stack[itemIndex].curindex = destination.index;
      setColItems((prev) => ({
        ...prev,
        [activeQuiz]: [...stack],
      }));
    }
  };


  return (

    <div>

      <div className={styles.header} id="header">
      <select id="dropDown" className={styles.dropdown} style={{ float: 'left' }} onChange={onQuizSelect}>
          {Object.keys(initData).map((quiz: string) => {
            return (
              <option key={quiz} value={quiz} style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', paddingLeft: '40px' }}>
                {initData[quiz].title}
              </option>
            );
          })}
        </select>
        <div id="title" className={styles.headertitle}>Essen</div>
        <Link to="/">Zum Wort-Symbol Spiel</Link>
      </div>

      <div className="p-2 text-xl">
        <button className={styles.btn} style={{ backgroundColor: bgColors.green }} onClick={onCheckboxValidSwitch}>Alles richtig?</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.red }} onClick={onCheckboxCorrectionSwitch}>Korrektur</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.yellow, float: 'right' }} onClick={onCheckboxStartOverSwitch}>Neustart</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.blue, float: 'right' }} onClick={onCheckboxStartNewGameSwitch}>Neues Spiel</button>
      </div>

      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >

        <div style={{ display: 'flex' }}>
          <div style={{ width: '13%' }}>
            <Column id="origin" title="Start" src="metacom/start.jpg" track={activeQuiz} data={colItems} reveal={reveal} hideRowText={true}/>
          </div>
          <div style={{ width: '87%' }}>
            {colItems[activeQuiz].map((quizData) => {
              return <div>
                <Row id={quizData.id} title={quizData.text} src={quizData.src} track={activeQuiz} data={colItems} reveal={reveal} />
              </div>
            })}
          </div>
        </div>


      </DragDropContext>

    </div>
  );
}


export default AppWordSymbolCombination;