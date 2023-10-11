// Component which renders the transcript of the AI Hint

import React, { useState, useEffect } from 'react'

import { apiGetAiHint } from './api'

import './AiHintTranscript.css'

const INT_S = 10;
const ADD_HINT_INTERVAL_MS = INT_S * 1000;

const AiHintTranscript = () => {

  const [aiScriptParts, setAiScriptParts] = useState([])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Int")
      apiGetAiHint().then((data) => {
        setAiScriptParts(prevParts => [...prevParts, data])
      })
    }, ADD_HINT_INTERVAL_MS)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="flex flex-col w-full h-full">
      {aiScriptParts.map((part, idx) => (
        <>
          <div key={idx} className="border-b-2 mb-2 bg-transparent">
            {part}
          </div>
          <hr className="aiHintTranscriptLineRule" />
        </>
      ))
      }
    </div>
  )
}

export default AiHintTranscript;

