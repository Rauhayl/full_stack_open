import { useState } from "react"

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setbad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <button onClick={() => setGood(good +1)} > Good </button>
      <button onClick={() => setNeutral(neutral +1)} > Neutral </button>
      <button onClick={() => setbad(bad +1)} > Bad </button>
      
      <h1> Statistics </h1>
      
      <p> Good: {good} </p> 
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>

      <p> All: {good + neutral + bad} </p>
      <p> Average : {good + neutral + bad === 0 ? 0 : (good - bad) / (good + neutral + bad)} </p>
      <p> Positive: {good + neutral + bad === 0 ? 0 : (good / (good + neutral + bad)) * 100} % </p>
    </div>
  )
}

export default App