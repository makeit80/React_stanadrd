import './App.css';
import { useState } from 'react';
import Square from './component/square'

function App() {
  const [titleQuery, setTitleQuery] = useState('');
  const [detailQuery, setDetailQuery] = useState('');

  const [inputList, setInputList] = useState([]);

  function addButtonHandler () {
    const toDoList = {
      id : inputList.length + 1,
      title : titleQuery,
      detail : detailQuery,
      isDone : false
    }
    setInputList([...inputList, toDoList])
    setTitleQuery("")
    setDetailQuery("")
  }

  function deleteButtonHandler (id) {
    const newList = inputList.filter((list) => list.id !== id)
    setInputList([...newList])
  }

  function doneButtonHandeler (id) {
    const newList = inputList.find(list => list.id === id)
    if (newList.isDone === false) {
      newList.isDone = true
    } else {
      newList.isDone = false
    }
    setInputList([...inputList])
  }


  return (
    <div className="wrapper">
      <input value={titleQuery} onChange={function(event) {setTitleQuery(event.target.value)}}></input>
      <input value={detailQuery} onChange={function(event) {setDetailQuery(event.target.value)}}></input>
      <button onClick={addButtonHandler}>추가</button>

      <div className='workingBox'>
        <h1>작업중</h1>
        {
          inputList.filter((list) => !list.isDone)
          .map(function (item, idx) {
            return <div>
              <Square 
              id={item.id}
              title={item.title}
              detail={item.detail}
              isDone={item.isDone}
              deleteButtonHandler={deleteButtonHandler}
              doneButtonHandeler={doneButtonHandeler}
              >
              </Square>
              </div>
          })
        }
      </div>
      <div className='doneBox'>
        <h1>완료</h1>
        {
          inputList.filter((list) => list.isDone)
          .map(function (item, idx) {
            return <div>
              <Square 
              id={item.id}
              title={item.title}
              detail={item.detail}
              isDone={item.isDone}
              deleteButtonHandler={deleteButtonHandler}
              doneButtonHandeler={doneButtonHandeler}
              >

              </Square>
              </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
