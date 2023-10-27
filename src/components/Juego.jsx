

import "../style/juego.css";
import Piedra from "./Piedra";
import Papel from "./Papel";
import Tijera from "./Tijera";

const Juego = () => {



  return (
    <div className="triangulo">
      <div className="game">
          
        <Piedra/>

      <Tijera/>
        
      <Papel/>
     
      </div>
    </div>
  );
};

export default Juego;
