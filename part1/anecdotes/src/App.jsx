import { useState } from 'react'

const Heading = ({ text }) => <h2>{ text }</h2>

const Paragraph = ({ text, votes }) => (
  <p>
    { text } <br />
    has { votes} votes
  </p>
)

const Button = ({ onClick, text}) => (
  <button onClick={onClick}> {text} </button>
)

const MostVotedAnecdote = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes)
  const maxVotedIndex = votes.indexOf(maxVotes)
  
  if (maxVotes === 0) {
    return ( <p> No votes </p> )
  }
  
  return <Paragraph text={anecdotes[maxVotedIndex]} votes={maxVotes} />
}

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
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  return (
    <div>
      <Heading text={'Anecdoe of the Day'}> </Heading>
      <Paragraph text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVote} text={'vote'} />
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text={'next anecdote'} />
      <Heading text={'Anecdoe with most votes'}> </Heading>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} /> 
    </div>
  )
}

export default App