import Score from './Score'

const Student = (props) => {
  return (
    <>
      <h3>{props.student.name}</h3>
      <h4>{props.student.bio}</h4>
      <h5>
        {props.student.scores.map((score, idx) =>
        <Score score={score} key={idx} />
        )}
      </h5>
    </>
  )
}

export default Student