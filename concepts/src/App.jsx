import { useState } from 'react'
import { memo } from 'react';

import './App.css'

const Header = memo( function({title}){
  console.log("memo called");
  return <div>
    Title
  </div>
} )


function App() {
  const [title,setTitle] = useState("default");

  function changeTitle(){
    setTitle("Latest : " )
  }

  console.log("re-render");

  // Here only the header with the title reloads and not the hardcoded values i passed along as 
  // the function is being memoised
  

  return (
   <div>
    <button onClick={changeTitle}>CHANGE TITLE</button>
    <Header title={title}/>
    <br/>

    <Header title = "hardcoded"/>
    <Header title = "hardcoded"/>
    <Header title = "hardcoded"/>
    <Header title = "hardcoded"/>

   </div>
  )
}

export default App
