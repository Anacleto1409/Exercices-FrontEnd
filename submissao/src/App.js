import logo from './logo.svg';
import './App.css';
import Lista from './ListaComApagar';
import { useState } from 'react';

function App() {
  const [pagina, setPagina] = useState(0)
  const [nome, setNome] = useState("")
  const handleLogin = () => {numeroDaPagina:Number,nome:String)=>
    setPagina(nyme)

  }
  return (
    <div className="App">

      {
        pagina === 0 ? <Login onLogin={setPagina} />
          : pagina === 1 ? <Lista />
            : <Discussao />
      }
    </div>
  );
}

export default App;
