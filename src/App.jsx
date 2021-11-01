import './App.css';
import { Home } from './page';
import { Header } from './component';
import style from'./App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <div className={style.wrapper}>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
