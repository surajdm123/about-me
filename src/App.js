import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import suraj from "./assets/Suraj-removebg-preview.png";

const myStyle = {
  "background-image":
    "url('https://raw.githubusercontent.com/sindoorarmurthy/Portfolio-Website/master/images/mybg.jpeg')",
  "background-size": "cover",
  "background-position": "top",
  height: "93.5vh",
  position: "relative",
  "box-shadow": "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
  "background-color": "#01071C",
};

const myStyle2 = {
  "background-size": "cover",
  "background-position": "top",
  height: "100vh",
  position: "relative",
  "padding-top": "60px",
};

function App() {
  return (
    <>
      <Router>
        <Navbar />

        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch> */}
      </Router>
      <div style={myStyle}>
        <img src={suraj} height="60%"></img>
        <h2>Hello, I'm Suraj Devatha!</h2>
      </div>
      <div>
        <div style={myStyle2}>
          <h1 id="support">Hello Man</h1>
        </div>
      </div>
    </>
  );
}

export default App;
