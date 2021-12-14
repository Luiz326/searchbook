import { Component } from "react";
import BuscaLivros from "./components/BuscaLivros";
import Footer from "./components/Footer";
import Header from "./components/Header";



class App extends Component {
  render(){
 return (
    <div >
      <Header/>
      <BuscaLivros />
      <Footer/>
    </div>
  );
  }
 
}

export default App;
