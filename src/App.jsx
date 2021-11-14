import './App.css';
import { Home, Shark } from './page';
import { Header, SharkDetailHeader } from './component';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import style from'./App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <div className={style.wrapper}>
          <Routes>
            <Route exact path="/" element={
              <>
              <Header />
              <Home />
              </>
            }/>
            <Route path="/detail" element={
              <>
              <SharkDetailHeader />
              <Shark />
              </>
            }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
