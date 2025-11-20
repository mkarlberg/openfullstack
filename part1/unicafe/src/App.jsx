import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button title="good" handler={() => setGood(good + 1)} />
      <Button title="neutral" handler={() => setNeutral(neutral + 1)} />
      <Button title="bad" handler={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

const Button = ({ title, handler }) => <button onClick={handler}>{title}</button>

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = 100 * (good / all) + " %"

  if (all) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </>
  )
}

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

export default App