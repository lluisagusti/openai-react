import { Configuration, OpenAIApi } from 'openai'
import InputArea from '../components/InputArea'
import { useState } from 'react'
import type { NextPage } from 'next'

const chatGPTDavinci3Values = {
  frequency_penalty: 0,
  max_tokens: 100,
  model: "text-davinci-003",
  presence_penalty: 0,
  temperature: 0,
  top_p: 1,
}

const Home: NextPage = (): JSX.Element => {
  
  const configuration = new Configuration({
    // api key should be in the env file!
    // visit https://platform.openai.com/docs/api-reference/introduction
    apiKey: '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',
  })

  const openai = new OpenAIApi(configuration)
  const option = chatGPTDavinci3Values
  const [result, setResult] = useState<any>('')
  const [input, setInput] = useState<any>('')


  const doAction = async () => {
    // Make original and motivational phrases that will inspire others to act and achieve their goals. Original and thought-provoking, these statements ought to compel readers to reflect thoroughly on the strength of their own potential and the opportunities open to them. To deliver your message in a unique and interesting way, think about employing a number of various quotes styles and formats. You should also feel free to try out new words and expressions.
    
    const newInput = `Haz una frase original y motivadora que inspirará a otros a actuar y lograr sus objetivos en respuesta a "FRASE_ENTRADA" especificada al final de este texto. Original y estimulante, esta declaración debería obligar a los lectores a reflexionar detenidamente sobre la fortaleza de su propio potencial y las oportunidades que se les abren. Para entregar su mensaje de una manera única e interesante, piense en emplear el formato más persuasivo. También debe sentirse libre de tratar de ser persuasivo. FRASE_ENTRADA: ${input}`

    const object: any = { ...option, prompt: newInput }

    const response = await openai.createCompletion(object)

    setResult(response.data.choices[0].text)
  }

  return (
    <div className="App">
      <h3 style={{ textAlign: 'center', paddingTop: '3em' }}>OpenAI Positive Untill death!</h3>
        <InputArea doAction={doAction} setInput={setInput} result={result} input={input} />
    </div>
  )
}

export default Home
