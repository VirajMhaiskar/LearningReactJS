import { useState } from 'react'


function App() {
  const [color, setColor] = useState()
  
  return (
    <div className= "w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg 
        bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>RED</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}>GREEN</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}>BLUE</button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}>OLIVE</button>
          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}>GREY</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}>YELLOW</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "pink"}}>PINK</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}>PURPLE</button>
          <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}>LAVENDER</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}>WHITE</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}>BLACK</button>
        </div>
      </div>
    </div>
  )
}

export default App
