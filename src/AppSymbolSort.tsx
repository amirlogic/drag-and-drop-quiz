import React, { useState } from 'react';
import { DragDropContext, DropResult, DragStart, DragUpdate } from 'react-beautiful-dnd';  // DragDropContextProps, DraggableDescriptor, 
import initData from './initData';
import { columnData } from './columnContent';
import Column from './Column';
import styles from './styles.module.css';
import schokolade from './metacom/food/schokolade.jpg'
import { Link } from 'react-router-dom';



function AppSymbolSort(): JSX.Element {


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

  // Function to get single cache data
  const getSingleCacheData = async (cacheName: string, url: RequestInfo | URL) => {
    if (typeof caches === 'undefined') return false;

    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      console.log('No cache existing')
    }

    return cachedResponse!.json().then((item) => {
      setCacheData(item)
    });
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
    const { destination, draggableId } = result;
  
    if (!destination) {
      return;
    }
  
    const stack = colItems[activeQuiz];
    const draggingItemIndex = stack.findIndex((item) => item.id === draggableId);
  
    if (draggingItemIndex === -1) {
      return;
    }
  
    const [draggingItem] = stack.splice(draggingItemIndex, 1);
    draggingItem.curcol = destination.droppableId;
    draggingItem.curindex = destination.index;
  
    for (let i = destination.index; i < stack.length; i++) {
      stack[i].curindex += 1;
    }
  
    stack.splice(destination.index, 0, draggingItem);
  
    setColItems((prev) => ({
      ...prev,
      [activeQuiz]: [...stack],
    }));
  };
  


  return (


    <div>

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
        <Link to="/app-word-symbol-combination">Zum Wort-Symbol Spiel</Link>
      </div>

      <div className="p-2 text-xl">
        <button className={styles.btn} style={{ backgroundColor: bgColors.green }} onClick={onCheckboxValidSwitch}>Alles richtig?</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.red }} onClick={onCheckboxCorrectionSwitch}>Korrektur</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.yellow, float: 'right' }} onClick={onCheckboxStartOverSwitch}>Neustart</button>
        <button className={styles.btn} style={{ backgroundColor: bgColors.blue, float: 'right' }} onClick={onCheckboxStartNewGameSwitch}>Neues Spiel</button>
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

          <Column id="origin" title="Start" src="metacom/start.jpg" track={activeQuiz} data={colItems} reveal={reveal} hideRowText={false} />
          {initData[activeQuiz].cols.map((quizData) => {
            return <Column id={quizData.id} title={quizData.name} src={quizData.src} track={activeQuiz} data={colItems} reveal={reveal} hideRowText={false} />
          })}

        </div>

      </DragDropContext>

    </div>
  );
}

export default AppSymbolSort;
