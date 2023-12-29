import './App.css'
import Card from "./components/Card"
function App() {

  return (
    <>
      <h1 className="bg-gray-900 text-orange-500 p-4 rounded-xl mb-4">Tailwind | React Props</h1>
        <Card username="Elizabeth"/>
        <Card username="Emma" />
        <Card />
    </>
  )
}

export default App
