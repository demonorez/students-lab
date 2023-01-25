import Student from "./Student"

const Score = (props) => {
  console.log(props);
    return (
    <>
      <div>
        {props.score.date}
      </div>
      <div>
        {props.score.score}  
      </div>
    </>
  )
}

export default Score