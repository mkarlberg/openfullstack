const Course = (props) => {
  const course = props.course

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => (
  <div>
    {props.parts.map((part) => <Part key={part.id} part={part}></Part>)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <b><p>total of {props.parts.reduce((accumalator, value) => accumalator + value.exercises, 0)} exercises</p></b>

export default Course;