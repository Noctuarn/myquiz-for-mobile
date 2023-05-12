import { useState } from "react";
import style from "./App.module.scss"
import Header from "./components/elements/Header/Header"
import Game from "./components/elements/Game/Game";
import Result from "./components/elements/Result/Result";
import {questions} from "./data.js"



function App() {

  const [step, setStape] = useState(0),
        [correct, setCorrect] = useState(0),
        question = questions[step];

  const setVariant = (index) => {
    setStape(step + 1);

    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }


  return (
    <div className="App">
        <div className={style.wrapper}>
          <Header/>
          {step != questions.length ? <Game step = {step} question = {question} setVariant = {setVariant} length = {questions.length}/> : <Result correct = {correct} length = {questions.length}/>}   
        </div>
    </div>
  );
}

export default App;
