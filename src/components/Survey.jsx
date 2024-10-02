import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const submit = (formData) => {
    setAnswers([...answers, formData])
  }
  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers = {answers}/>
      </section>
      <section className="survey__form">
        <Form submit = {submit} />
      </section>
    </main>
  );
}

export default Survey;
