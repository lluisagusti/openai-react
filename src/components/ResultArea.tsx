import React from 'react'



export default function ResultArea({ result, input, isNewQuery }: any) {
  return (<div style={{ paddingLeft: '2em', paddingTop: '2em'}}>
      {isNewQuery && <p className="result-text">{result.length > 0 ? `${input[0].toUpperCase()}${input.slice(1)} ${result}` : ""}</p>}
  </div>)
}