import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';  // Import axios if not imported
import './App.css';

const ChildComponent = ({onClick})=>{
  console.log("child Component");
  return <button onClick={onClick}>
    Click ME</button>
}

const CallBack= ()=> {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("button Clicked");
    setCount(count +1);

  };;

const memoisedHandleClick = useCallback(handleClick,[]);


return (
  <div>
    <p>Count:{count}</p>
    <ChildComponent onClick = {memoisedHandleClick}/>
  </div>
);
}


export default CallBack;