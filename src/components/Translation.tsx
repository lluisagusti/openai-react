import React from 'react'



export default function Translation({ doAction, setInput, result }: any) {
  return (
    <div>
      <textarea className="text-area" cols={55} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
      <button className="action-btn" onClick={doAction}> GASTA TOKENS </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  )
}