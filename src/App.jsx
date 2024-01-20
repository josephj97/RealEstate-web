import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero"
import './App.css'
import Companies from "./Components/Companies/Companies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
    </div>

  );
}

export default App;
