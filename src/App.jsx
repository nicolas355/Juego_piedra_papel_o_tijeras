

import './App.css'

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Seleccion from './pages/Seleccion';
import Start from './pages/Start';
import Resultado from './pages/Resultado';
import { ResultadoProvider } from './components/ResultadoContext';


function App() {

  return (

    
    <ResultadoProvider>

    <>
    <BrowserRouter>
    <Routes>


      <Route path='/' element={ <Seleccion/>} />
      <Route path='/resultado/:eleccion' element={ <Resultado/>} />
  
    </Routes>
    </BrowserRouter>
 
    </>
    </ResultadoProvider>
  )
}

export default App
