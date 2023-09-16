import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./components/pages/home/Homepage";
import MovieDetail from "./components/movieDetail/MovieDetail";
import Error from "././components/pages/home/Error";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
        {/* <Card /> */}
      </Router>
    </div>
  );
}

export default App;
