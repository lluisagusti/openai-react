import { Configuration, OpenAIApi } from 'openai'
import OptionSelection from '../components/OptionSelection'
import Translation from '../components/Translation'
import { arrayItems } from '../openai'
import { useState } from 'react'
import type { NextPage } from 'next'

const Home: NextPage = (): JSX.Element => {
  
  const configuration = new Configuration({
    // api key should be in the env file!
    // visit https://platform.openai.com/docs/api-reference/introduction
    apiKey: '',
  })

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState<any>({})
  const [result, setResult] = useState<any>('')
  const [input, setInput] = useState<any>('')

  const selectOption = (option: any) => {
    setOption(option);
  }

  const doAction = async () => {
    let object: any = { ...option, prompt: input }

    const response = await openai.createCompletion(object)

    setResult(response.data.choices[0].text)
  }

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doAction={doAction} setInput={setInput} result={result} />
      )}
    </div>
  )
}

export default Home
