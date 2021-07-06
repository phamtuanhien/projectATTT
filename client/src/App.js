import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Header from "./components/Header";
import Register from "./pages/Register";
import Vote from "./pages/Vote";
import Info from "./pages/Info";
import Cutri from "./pages/Cutri";
import Ungvien from "./pages/Ungvien";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/stats" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/vote" exact component={Vote} />
        <Route path="/info" exact component={Info} />
        <Route path="/cutri" exact component={Cutri} />
        <Route path="/ungvien" exact component={Ungvien} />
      </Router>
    </div>
  );
}

export default App;
