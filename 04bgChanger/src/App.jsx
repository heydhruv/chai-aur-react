import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "lime"}} onClick={() => setColor("lime")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "black"}} onClick={() => setColor("black")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "cyan"}} onClick={() => setColor("cyan")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "magenta"}} onClick={() => setColor("magenta")}></button>
          <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}></button>
        </div>
      </div>
    </div>

  )
}

export default App
