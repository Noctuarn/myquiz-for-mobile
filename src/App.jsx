import style from "./App.module.scss"
import Header from "./components/elements/Header/Header"
import Game from "./components/elements/Game/Game";
import Result from "./components/elements/Result/Result";

function App() {
  return (
    <div className="App">
        <div className={style.wrapper}>
          <Header/>
          {/* <Game/> */}
          <Result/>
        </div>
    </div>
  );
}

export default App;
