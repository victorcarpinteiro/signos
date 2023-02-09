import React from 'react';
import './App.css';
import Corpo from './components/Corpo';
import Footer from './components/Footer';
import Topo from './components/Topo';
import { useState } from 'react';
import Detalhes from './components/Detalhes';

const signosDetalhes =[
  {id:1, nome: "inicial"},
  {id:2, nome: "aries"},
  {id:3, nome: "touro"},
  {id:4, nome: "gemeos"},
  {id:5, nome: "cancer"},
  {id:6, nome: "leao"},
  {id:7, nome: "virgem"},
  {id:8, nome: "libra"},
  {id:9, nome: "escorpiao"},
  {id:10, nome: "sagitario"},
  {id:11, nome: "capricornio"},
  {id:12, nome: "aquario"},
  {ìd:13, nome: "peixes"},
];
function App() {
  const [pagina, setPagina] = useState(signosDetalhes[0].nome)

  // as= Alterar Signo
  const as0 = () => {
    setPagina(signosDetalhes[0].nome)
  }
  const as1 = () => {
    setPagina(signosDetalhes[1].nome)
  };
  const as2 = () => {
    setPagina(signosDetalhes[2].nome)
  };
  const as3 = () => {
    setPagina(signosDetalhes[3].nome)
  };
  const as4 = () => {
    setPagina(signosDetalhes[4].nome)
  };
  const as5 = () => {
    setPagina(signosDetalhes[5].nome)
  };
  const as6 = () => {
    setPagina(signosDetalhes[6].nome)
  };
  const as7 = () => {
    setPagina(signosDetalhes[7].nome)
  };
  const as8 = () => {
    setPagina(signosDetalhes[8].nome)
  };
  const as9 = () => {
    setPagina(signosDetalhes[9].nome)
  };
  const as10 = () => {
    setPagina(signosDetalhes[10].nome)
  };
  const as11 = () => {
    setPagina(signosDetalhes[11].nome)
  };
  const as12 = () => {
    setPagina(signosDetalhes[12].nome)
  };
  
   console.log(pagina)

  return (
    <div className="App">
      <Topo />
      {pagina === "inicial" && <Corpo 
      as1 ={as1} 
      as2 ={as2} 
      as3 ={as3} 
      as4 ={as4} 
      as5 ={as5} 
      as6 ={as6} 
      as7 ={as7} 
      as8 ={as8} 
      as9 ={as9} 
      as10 ={as10} 
      as11 ={as11} 
      as12 ={as12}
      />}
      {pagina === "aries" && <Detalhes valor={pagina}  as0={as0}/> }
      {pagina === "touro" && <Detalhes  valor={pagina} as0={as0}/> }
      {pagina === "gemeos" && <Detalhes  valor={pagina} as0={as0}/> }
      {pagina === "cancer" && <Detalhes  valor={pagina} as0={as0}/> }
      {pagina === "leao" && <Detalhes valor={pagina} as0={as0} /> }
      {pagina === "virgem" && <Detalhes valor={pagina} as0={as0} /> }
      {pagina === "libra" && <Detalhes  valor={pagina} as0={as0}/> }
      {pagina === "escorpiao" && <Detalhes valor={pagina} as0={as0} /> }
      {pagina === "sagitario" && <Detalhes  valor={pagina} as0={as0}/> }
      {pagina === "capricornio" && <Detalhes valor={pagina} as0={as0} /> }
      {pagina === "aquario" && <Detalhes valor={pagina} as0={as0} /> }
      {pagina === "peixes" && <Detalhes valor={pagina} as0={as0} /> }
      
      <Footer />
    
    </div>
  );
}

export default App;
