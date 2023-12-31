import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [passwordlengh, setlength] = useState(8)
  const [numberallow, setNumberallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState()

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let generatedPass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallow) {
      str += "1234567890"
    }
    if (charallow) {
      str += "!@#$%^&*~`"
    }

    for (let i = 1; i <= passwordlengh; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      generatedPass += str.charAt(char)

    }
    setPassword(generatedPass)
  }, [passwordlengh, numberallow, charallow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [passwordlengh, numberallow, charallow, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-md overflow-hidden mb-4">
          <input type="text" className="w-full py-1 px-3 outline-none" placeholder='password' value={password} readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 mx-2' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input className='cursor-pointer' type="range" min={8} max={100} value={passwordlengh} onChange={(e) => {setlength(e.target.value)}}/>
            <label>Length:-{passwordlengh}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberallow} id="numberinput" onChange={() => {setNumberallow((prev => !prev))}} />
            <label>numbers</label>
            <input type="checkbox" defaultChecked={charallow} id="charinput" onChange={() => {setCharallow((prev => !prev))}} />
            <label>Special Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
