const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part  = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />    
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} /> 
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total Number of Exercises: {props.totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a Component',
      exercises: 14
    }
  ]

  let totalExercises = 0;
  for(let i = 0; i < parts.length; i++) {
    totalExercises += parts[i].exercises;
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App