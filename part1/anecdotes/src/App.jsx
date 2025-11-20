import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(_ => 0))
  const [mostVotes, setMostVotes] = useState(0)

  const handleVoteClick = () => {
    let votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);

    let mostVotesUpdated = votesCopy.indexOf(Math.max(...votesCopy));
    setMostVotes(mostVotesUpdated)
  }

  const handleNextAnecdoteClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  return (
    <>
      <Anecdote title="Anecdote of the day" text={anecdotes[selected]} votes={votes[selected]}></Anecdote>

      <div>
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleNextAnecdoteClick}>next anecdote</button>
      </div>

      <Anecdote title="Anecdote with most votes" text={anecdotes[mostVotes]} votes={votes[mostVotes]}></Anecdote>
    </>
  )
}

const Anecdote = ({ title, text, votes }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {text}
      </div>
      <div>
        has {votes}
      </div>
    </>
  )
}

export default App