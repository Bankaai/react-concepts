import { useState } from 'react'

import './App.css'

function Header({title}){
  return <div>
    {title}
  </div>
}

function HeaderWithButton(){
  
  const[title,setTitle] = useState("Default");

  

  function changeTitle(){
    setTitle("new Title");
  }

  return<>
    <button onClick={changeTitle}>Change Title</button>
    <Header title={title}/>
  </>

}

function App() {
  console.log("re-render");
  
  return (
   <div>
   <HeaderWithButton/>
   <Header title= "Hardcoded title"/>
   </div>
  )
}

export default App
