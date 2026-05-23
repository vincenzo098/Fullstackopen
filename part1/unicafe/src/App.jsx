import { useState } from 'react'

const Header = ({content}) => {
  return(
    <h1>{content}</h1>
  )
}



const Button = ({onClick, text}) => <button onClick={() => onClick(text)}>{text}</button>

const Statistics = ({good, neutral, bad, total}) =>{

  if(total === 0) return <p>No feedback given</p>

  return(
    <>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {total}</p>
    <p>average {(good - bad)/(total)}</p>
    <p>positive {(good / total) * 100} %</p>
    </>
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