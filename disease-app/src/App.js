import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeIT from "./pages/HomeIT";

const App = () => {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/it" element={<HomeIT />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
