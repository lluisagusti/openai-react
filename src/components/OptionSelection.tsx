import React from 'react'



export default function OptionSelection({ arrayItems, selectOption }: any) {
  return (
    <>
      <h1 className="heading">Lluís ChatGPT</h1>

      <div className="grid-main">
        {arrayItems.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}