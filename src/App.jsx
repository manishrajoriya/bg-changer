import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")
  
  

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
       
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className="outline-none px-4 py-1 rounded-3xl"
    onClick={()=>setColor("red")}
    style={{backgroundColor:"red"}}>
      red
    </button>
    <button
    onClick={()=>setColor("green")}
     className="outline-none px-4 py-1 rounded-3xl"
    style={{backgroundColor:"green"}}>
      Green
    </button>
    <button
    onClick={()=>setColor("blue")}
    className="outline-none px-4 py-1 rounded-3xl"
    style={{backgroundColor:"blue"}}>
      Blue
    </button>
    <button 
    onClick={()=>setColor("gray")}
    className="outline-none px-4 py-1 rounded-3xl"
    style={{backgroundColor:"gray"}}>
      Gray
    </button>
     </div>

    </div>
    </div>
     
    </>
  )
}

export default App
