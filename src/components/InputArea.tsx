import React from 'react'



export default function InputArea({ doAction, setInput, result, input, isNewQuery }: any) {
  return (
    <div style={{ paddingLeft: '2em', paddingTop: '10em'}}>
      <div style={{ paddingBottom: '1em'}}>
      <input className="text-area" width={150} height={1} onChange={(e) => setInput(e.target.value)}></input>
      <button className="action-btn" onClick={doAction}> POSITIVO </button>
      </div>
      {isNewQuery && <p className="result-text">{result.length > 0 ? `${input[0].toUpperCase()}${input.slice(1)} ${result}` : ""}</p>}
    </div>
  )
}