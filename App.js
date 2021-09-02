import React, {useState} from 'react';
import './App.css';

function App() {


const [estado, setEstado] = useState('ENTRADA')
const [palpite, setPalpite] = useState(150)
const [numeroPalpites, setNumeroPalpites] = useState(1)
const [min, setMin] = useState(0)
const [max, setMax] = useState(300)


const iniciarJogo = () => {
  setEstado('RODANDO')
  setMin(0)
  setMax(300)
  setNumeroPalpites(1)
  setPalpite(150)
}

if(estado === 'ENTRADA'){
  return <button onClick={iniciarJogo}>Começar a Jogar!</button>
}

const menor = () =>{
  setNumeroPalpites(numeroPalpites + 1)
  setMax(palpite)
  const proxPalpite = parseInt((palpite - min)/2) + min
  setPalpite(proxPalpite)
}

const maior = () =>{
  setNumeroPalpites(numeroPalpites + 1)
  setMin(palpite)
  const proxPalpite = parseInt((max - palpite)/2) + palpite
  setPalpite(proxPalpite)
}

const acertou = () =>{
   setEstado('FIM')
}
if(estado === 'FIM'){
  return (
    <div>
           <p>Acertei o número {palpite} com {numeroPalpites} chutes!</p>
           <button onClick={iniciarJogo}>Iniciar Novamente!</button>
    </div>
  ) 
}



  return (
    <div className="App">
      <p>O seu Número é {palpite}?</p>
    <button onClick={menor}>Menor!</button>
    <button onClick={acertou}>Acertou!</button>
    <button onClick={maior}>Maior</button>
    </div>
  );
}

export default App;
