import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const codeAreaDefVal = `\
  function f(A) {
    // your code here
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-row w-full h-full justify-around appBg">
      <div className="biMainLayoutCol">
        <div className="biTranscriptCont">
          <div className="biTranscriptBg">
          </div>
          <div className="absolute z-50">
            AI Transcript
          </div>
        </div>
      </div>
      <div className="biMainLayoutCol w-2/5 align-center">
        <div className="w-full h-4/5 flex flex-col justify-between items-center">
          <div className="w-4/5 h-1/4 mb-10 overflow-y-scroll shadow bg-primary opacity-50 p-5">
            <h2>Question 1</h2>
            <p>Write an algorithm which sorts an array of integers from least to greatest in O(NlogN) time and O(1) space (in-place).</p>
            <p>Example Input: A = [1, 5, 2, 3, 10]</p>
            <p>Example Output: nothing (sort in place)</p>
          </div>
          <form onSubmit={e => e.preventDefault()} className="h-4/5 flex flex-col justify-between" style={{'width': '95%'}}>
            <div className="w-full h-4/5 shadow">
              <textarea defaultValue={codeAreaDefVal} className="w-full h-full bg-secondary opacity-75 text-black border-none"></textarea>
            </div>
            <div className="w-full h-1/8">
              <button className="w-1/2 h-full bg-primary opacity-50 shadow">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="biMainLayoutCol">
        <div className="biTranscriptCont">
          <div className="biTranscriptBg">
          </div>
          <div className="absolute z-50">
            Your Transcript
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
