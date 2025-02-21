import { useState } from "react"

const Button = ({ onClick, text}) =>{
  return (
    <button onClick={onClick}> {text} </button>
  )
}
 
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good:" value={props.good} />
        <StatisticLine text="Neutral:" value={props.neutral} />
        <StatisticLine text="Bad:" value={props.bad} />
        <StatisticLine text="All:" value={total} />
        <StatisticLine text="Average:" value={(props.good - props.bad) / total} />
        <StatisticLine text="Positive:" value={(props.good / total) * 100 + " %"} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good +1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral +1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad +1)} text={'Bad'} />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;