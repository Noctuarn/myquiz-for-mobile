import style from "./App.module.scss"
import Header from "./components/elements/Header/Header"
import Game from "./components/elements/Game/Game";

function App() {
  return (
    <div className="App">
        <div className={style.wrapper}>
          <Header/>
          <Game/>
        </div>
    </div>
  );
}

export default App;
