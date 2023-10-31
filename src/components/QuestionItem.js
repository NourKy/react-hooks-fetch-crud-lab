import React,{useState} from "react";

function QuestionItem({ question ,setQuestionDeleted,setUpdatedQu}) {
  console.log(question);
  const { id, prompt, answers, correctIndex } = question;
const [updatedCorrectAnswer,setupdatedCorrectAnswer]=useState(correctIndex);
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDeleteQu()
  {
    fetch(`http://localhost:4000/questions/${question.id}`,{
    method:"DELETE",

   } )
   .then((r) => r.json())
   .then(() => setQuestionDeleted(question.id));

  }
function handleUpdate(event)
{

  const newUpdatedCorrectAnswer = event.target.value;
  console.log("newUpdatedCorrectAnswer",newUpdatedCorrectAnswer)
  setupdatedCorrectAnswer(newUpdatedCorrectAnswer); 
  console.log("updatedCorrectAnswer",updatedCorrectAnswer);
  fetch(`http://localhost:4000/questions/${question.id}`,{
    method:"PATCH",
    headers:
    { "Content-Type": "application/json" ,
    },
    body:JSON.stringify(
     {
  "correctIndex": newUpdatedCorrectAnswer,
     }
  ),
})
  .then((r)=>r.json())
  .then((updatedAnswer)=>setUpdatedQu(updatedAnswer))
}
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={updatedCorrectAnswer} onChange={handleUpdate}>{options}</select>
      </label>
      <button onClick={handleDeleteQu}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
