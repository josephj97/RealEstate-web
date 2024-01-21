import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero"
import './App.css'
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residencies></Residencies>
    </div>

  );
}

export default App;
