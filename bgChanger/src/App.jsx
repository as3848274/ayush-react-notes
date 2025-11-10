import { useState } from "react"

function App() {
  const [color, setColor] = useState("skyblue")

  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor : color }}
    >
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
    <div className="flex flex-wrap
    justify-center gap-3 shadow-xl bg-white pc-3 py-2 rounded-2xl"> 
    <button
    onClick={() => setColor("red")}
    className="outine-none px-4 py-1 rounded-full text-white shadow-lg"
    style = {{backgroundColor : "red"}}
    >Red
     </button>
     <button
     onClick={() => setColor("green")}
    className="outine-none px-4 py-1 rounded-full text-white shadow-lg"
    style = {{backgroundColor : "green"}}
    >Green
     </button>
     <button
     onClick={() => setColor("blue")}
    className="outine-none px-4 py-1 rounded-full text-white shadow-lg"
    style = {{backgroundColor : "Blue"}}
    >Blue
     </button>
      <button
     onClick={() => setColor("yellow")}
    className="outine-none px-4 py-1 rounded-full text-white shadow-lg"
    style = {{backgroundColor : "Yellow"}}
    >Yellow
     </button>
       <button
     onClick={() => setColor("purple")}
    className="outine-none px-4 py-1 rounded-full text-white shadow-lg"
    style = {{backgroundColor : "Purple"}}
    >Purple
     </button>
    </div>
    
     </div>

    </div>
  )
}

export default App
