import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [min,setmin] = useState(0)
  const [sec,setsec] = useState(0)
  const [hr,sethr] = useState(0)
  const [rset,setrset] = useState(false)

 useEffect(()=>{
  if(rset){
    const id = setInterval(() => {
      setsec((pre)=>{
        if(pre ===59 ){
          setmin((prem)=>{
            if(prem===59){
             sethr((pr)=>pr+1)
             return 0
            }else{
              return prem +1
            }
          })
          return 0;
        }else{
          return pre+1
        }
      })
    }, 1000);
    return ()=>clearInterval(id)
}},[rset])
  
  
const handlestart = ()=>{
  setrset(true)
}
const handlestop = ()=>{
  setrset(false)
}
const handlereset = ()=>{
  sethr(0)
  setmin(0)
  setsec(0)
}
  return (
    <div className="App">
     <h1>stop watch</h1>
     <p>{hr<10? '0'+hr:hr}:{min<10?'0'+min:min}:{sec<10?'0'+sec:sec}</p>
     <button onClick={handlestart}>start</button>
     <button onClick={handlestop}>stop</button>
     <button onClick={handlereset}>reset</button>
    </div>
  );
}

// change
export default App;
