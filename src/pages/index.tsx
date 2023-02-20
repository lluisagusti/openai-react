// import "./App.css
import { Configuration, OpenAIApi } from 'openai'
import OptionSelection from '../components/OptionSelection'
import Translation from '../components/Translation'
import { arrayItems } from '../openai'
import { useState } from 'react'
import type { NextPage } from 'next'

const Home: NextPage = (): JSX.Element => {
  
  const configuration = new Configuration({
    organization: "org-3tYGd4NnpNwjT8XO544bwiV9",
    apiKey: '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',
  })

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState<any>({})
  const [result, setResult] = useState<any>('')
  const [input, setInput] = useState<any>('')

  const selectOption = (option: any) => {
    setOption(option);
  }

  const doStuff = async () => {
    let object: any = { ...option, prompt: input }

    const response = await openai.createCompletion(object)

    setResult(response.data.choices[0].text)
  }

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  )
}

export default Home
