import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <header><Navbar/></header>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
