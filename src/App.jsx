import React, { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"]
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("")
  const [query, setQuery] = useState("") 


  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} /`;
    });
    setResult(temp)
  }

  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query))
    setResult(filtered.join(", "))
  }

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    })
    setResult(mapped.join(", "))
  }

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`
    })
    setResult(reduced);
  }

  const handlePush = function () {
    if (query.length <= 0) {
      alert("값을 입력해주세요");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  }

  const handleSlice = function () { 
    const newArr = [...array];
    setResult(newArr.slice(1, 3).join(", "))
  }

  const handleSplice = function () {
    const newArr = [...array];
    newArr.splice(0, 1, String(query));
    setResult(newArr.join(", "))
  }

  const handleIndexOf = function () {
    const indexArr = array.indexOf(query);
    setResult(indexArr);
  }
  
  const handleInclude = function () {
    const includeArr = array.includes(query);
    setResult(String(includeArr));
  }

  const handleFind = function () {
    const finding = array.find(x => x.includes(query))
    if (finding == undefined) {
      return setResult('Not Found')
    }
    setResult(finding);
  }

  const handleSome = function () {
    setResult(String(array.some(x => x.includes(query))))
  }

  const handleEvery = function () {
    setResult(String(array.every(x => x.length >= 2)))
  }

  const handleSort = function () {
    setResult(array.sort().join(", "))
  }
  
  const handleJoin = function () {
    setResult(array.join(", "))
  }


  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input value={query} onChange={function (e) {
        setQuery(e.target.value);
      }}></input>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleInclude}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
    //git commit test
  );
}

export default App;
