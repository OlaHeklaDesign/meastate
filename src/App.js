import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer/Footer';
import OffertPage from "./Pages/OffertPage/OffertPage";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/meastate' element={<HomePage/>} />
          <Route path='/meastate/search' element={<SearchPage/>} />
          <Route path='/meastate/offert' element={<OffertPage/>}>
            <Route path=':offertId' element={<OffertPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;