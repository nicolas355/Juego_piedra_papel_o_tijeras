import { Link, useParams } from "react-router-dom";
import "../style/resultado.css";
import Papel from "../components/Papel";
import "../style/juego.css";
import Tijera from "../components/Tijera";
import Piedra from "../components/Piedra";
import { useState, useEffect,useContext  } from "react";
import { ResultadoContext } from "../components/ResultadoContext";
import Puntos from "../components/Puntos";



const Resultado = () => {


  const { score, setScore } = useContext(ResultadoContext);

  const [maquina, setMaquina] = useState(null); // Inicializar maquina con null

  const params = useParams();

  const reglas = {
    //opcion del usuario
    papel: {
      piedra: true, // ganamos
      tijera: false, // perdemos
    },

    //opcion del usuario
    tijera: {
      papel: true, // ganamos
      piedra: false, // perdemos
    },
    //opcion del usuario
    piedra: {
      tijera: true, // ganamos
      papel: false, // perdemos
    },
  };

  const comprobar = () => {
    if(reglas[params.eleccion][maquina]){
      setScore(prevScore => prevScore + 1);
    }
  };

  
  useEffect(() => {
    const eleccionPC = () => {
      const opciones = ["piedra", "papel", "tijera"]; // arreglo
      const randomOption = Math.floor(Math.random() * opciones.length); // 1 2 3
      return opciones[randomOption]; // opciones[1], opciones[2], opciones[3] de forma aleatoria
    };
  
    const newMaquina = eleccionPC();
    setMaquina(newMaquina); // actualizar maquina en el estado
  }, [params.eleccion]);
  
  useEffect(() => {
    comprobar();
  }, [maquina]);

// evitar que se pueda elegir en la pagina de resultado





return (
    <div>

    <Puntos score= {score} />
      <div className="pick">
        <div className="user">
          <h2 className="h2">Tú </h2>

          <div className="game">
            {params.eleccion === "papel" ? <Papel  /> : ""}
            {params.eleccion === "tijera" ? <Tijera /> : ""}
            {params.eleccion === "piedra" ? <Piedra /> : ""}
          </div>
        </div>

        <div className="result">
          {/* verificamos si en el objeto reglas la opcion del user y de la maquina  
       (reglas['tijera','papel'] */}

          <p className="results">
            {reglas[params.eleccion][maquina]
              ? "Ganaste"
              : reglas[params.eleccion][maquina] !== undefined
              ? "Perdiste"
              : ""}
          </p>

          <p className="empate">
            {maquina === params.eleccion ? "EMPATE" : ""}
          </p>

          <div className="boton">
            <Link
              to={{
                pathname: "/seleccion",
              }}
            >
              Jugar Otra vez
            </Link>

         


          </div>
        
        </div>

        <div className="machine">
          <h2 className="h2">Maquina</h2>

          <div className="game">
            {maquina === "papel" ? <Papel   /> : ""}
            {maquina === "tijera" ? <Tijera /> : ""}
            {maquina === "piedra" ? <Piedra /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
