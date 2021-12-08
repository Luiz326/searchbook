import { Component } from "react";
import { MdSearch } from "react-icons/md";
import { BiBook, BiWorld, BiUser } from "react-icons/bi";
import './style.css';


class BuscaLivros extends Component{

    constructor(props){
        super(props);
             this.state ={

             };       
               
    }

   

    render(){
        return(
            <div className="container">
                <h1>Busca Livros</h1>
                <input type="text" /><span><MdSearch fontSize="30px"/></span>
                <div className="container-books">
                   <span className="p-span-autor"><BiUser fontSize="20px"/></span>  <p>autor</p>
                   <span className="p-span"><BiBook fontSize="20px"/></span> <p> titulo</p>
                   <span className="p-span"><BiWorld fontSize="20px"/></span>  <p>url</p>
                </div>

            </div>
        );
    }
}

export default BuscaLivros;