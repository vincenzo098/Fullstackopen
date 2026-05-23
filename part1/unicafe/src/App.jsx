import { useState } from 'react'

const Header = ({content}) => (
  <h1>{content}</h1>
)



const Button = ({onClick, text}) => <button onClick={() => onClick(text)}>{text}</button>

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad, total}) =>{

  if(total === 0) return <p>No feedback given</p>

  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={(good - bad)/(total)}/>
        <StatisticLine text="positive" value={`${(good / total) * 100} %`}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const content = ['give feedback', 'statistics']
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalFeedback = good + neutral + bad

  const handleClick = (feedback) => {
    if (feedback === 'good') setGood(good + 1)
    else if (feedback === 'neutral') setNeutral(neutral + 1)
    else if (feedback === 'bad') setBad(bad + 1)
  }

  return (
    <div>
      <Header content = {'give feedback'} />
      <Button onClick={handleClick} text={'good'} />
      <Button onClick={handleClick} text={'neutral'} />
      <Button onClick={handleClick} text={'bad'} />
      <Header content = {'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback}/>
    </div>
  )
}

export default App