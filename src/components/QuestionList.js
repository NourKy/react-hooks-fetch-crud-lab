import React, { useState,useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  
  const[questions,setQuestions]=useState([]);
  const[questionDeleted,setQuestionDeleted]=useState();
  const[questionUpdated,setQuestionUpdated]=useState();
useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then((r)=>r.json())
  .then((questions)=>setQuestions(questions))

},[questionDeleted,questionUpdated]

)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions !== null && questions.map((question) => (
          <QuestionItem key={question.id} question={question} setQuestionDeleted={setQuestionDeleted} setUpdatedQu={setQuestionUpdated} />
       ) )}</ul>
    </section>
  );
}

export default QuestionList;
