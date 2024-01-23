import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
