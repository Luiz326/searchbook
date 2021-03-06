import {  useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { BiBook, BiWorld, BiUser } from "react-icons/bi";
import './style.css';
import api from "../../service/api";


export default function BuscaLivros() {

    
    const [livros, setLivros] =useState([]);
    const [busca, setBusca] = useState('');
     
    useEffect(()=>{
       function pegaLivro(){
             api.get( "api/v1/search?query=").then(({data})=>{
            setLivros(data.hits);
        })
        
        }
       
       pegaLivro()
       
        // eslint-disable-next-line
    },[busca]);
    
  async  function pegaLivroSearch(){
      await  api.get( "api/v1/search?query=" + busca).then(({data})=>{
       setLivros(data.hits);
   })
   
   }
   
    return (
        <div className="container">
            <h1>Busca Livros</h1>
            <input type="text" value={busca} onChange={(ev)=>setBusca(ev.target.value)} /><span onClick={pegaLivroSearch}><MdSearch id="lupa" fontSize="30px" /></span>
           
               {livros?.map((livro)=>(
                   <div key={livro.parent_id} className="container-books">

                   <span className="p-span-autor"><BiUser fontSize="20px" /></span>  <p> {livro.author}</p>
                   <span className="p-span"><BiBook fontSize="20px" /></span> <p> {livro.story_title}</p>
                   <span className="p-span"><BiWorld fontSize="20px" /></span>  <p>{livro.story_url}</p>
                      
                   </div>
                ))}

            </div>
 
    );

}

