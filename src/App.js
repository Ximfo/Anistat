import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Add } from "./add_anime/Add";
import { Navbar } from "./Navbar";
import { CardDetail } from "./add_anime/CardDetail";
import { List } from "./list/List";
import { Stats } from "./stats/Stats";

function App() {
  return (
      <BrowserRouter>
        <div className={'components'}>
          <Navbar />
          <Routes>
              <Route path='/list' element={<List />} />
              <Route path='/stats' element={<Stats />} />
            <Route path='/:id' element={<Add />} />
            <Route path='/' element={<Add />} />
            <Route path='/add/:id' element={<CardDetail />} />

          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
