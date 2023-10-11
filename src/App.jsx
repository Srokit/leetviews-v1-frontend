import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AiHintTranscript from './AiHintTranscript'

const codeAreaDefVal = `\
  function f(A) {
    // your code here
  }
`

let RECOG = null;

function App() {
  const [count, setCount] = useState(0)

  const [intervieweeScript, setIntervieweeScript] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    RECOG = new SpeechRecognition()
    RECOG.continuous = true
    RECOG.interimResults = true
    RECOG.lang = 'en-US'

    RECOG.onresult = event => {
      let finalTranscript = '';
      for (const result of event.results) {
        finalTranscript += result[0].transcript;
      }
      setIntervieweeScript(finalTranscript)
    }
  }, [setIntervieweeScript])

  const onRecordClick = () => {
    console.log("Starting recording")
    if (RECOG == null) {
      console.error("SpeechRecognition not initialized")
      return
    }
    if (isRecording) RECOG.stop()
    else RECOG.start()
    setIsRecording(!isRecording)
  }

  return (
    <div className="flex flex-col w-full h-full justify-center appBg">
      <div className="w-full flex flex-row justify-around" style={{'height': '90%'}}>
        <div className="biMainLayoutCol">
          <div className="biTranscriptCont">
            <div className="biTranscriptBg">
            </div>
            <div className="absolute z-50">
              {intervieweeScript}
            </div>
          </div>
          <div className="h-12 w-full bg-primary opacity-50 shadow-lg mt-12 flex flex-row">
            <button onClick={() => {onRecordClick()}} className="w-full h-full bg-primary opacity-50 shadow">{(isRecording) ? <>Stop Voice</> : <>Record Voice</>}</button>
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
          <div className="biTranscriptCont overflow-y-scroll relative bg-primary/50">
            <div className="relative z-50 top-0 left-0 h-full w-full">
              <AiHintTranscript />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
