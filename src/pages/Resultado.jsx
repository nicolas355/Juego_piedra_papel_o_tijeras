import { Link, useParams } from "react-router-dom";
import "../style/resultado.css";
import Papel from "../components/Papel";
import "../style/juego.css";
import Tijera from "../components/Tijera";
import Piedra from "../components/Piedra";
import { useState, useEffect, useContext } from "react";
import { ResultadoContext } from "../components/ResultadoContext";
import Puntos from "../components/Puntos";

const Resultado = () => {
  const [isChoosing, setIsChoosing] = useState(false);
  const [resultado, setResultado] = useState("");

  const { score, setScore } = useContext(ResultadoContext);

  const [maquina, setMaquina] = useState(null); // Inicializar maquina con null
  const [animate, setAnimate] = useState(false);
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
    if (reglas[params.eleccion][maquina]) {
      setScore((prevScore) => prevScore );
    }
  };

  useEffect(() => {
    const eleccionPC = () => {
      const opciones = ["piedra", "papel", "tijera"]; // arreglo
      const randomOption = Math.floor(Math.random() * opciones.length); // 0, 1, 2 (índices de las opciones)
  
      return opciones[randomOption]; // opciones[randomOption] de forma aleatoria
    };
  
    const newMaquina = eleccionPC(); // elección random
  
    setMaquina(newMaquina); // actualizar maquina en el estado
  }, [params.eleccion, animate]);
  
  useEffect(() => {
    setIsChoosing(true); // Activa la animación
    const timeout = setTimeout(() => {
      setIsChoosing(false); // Desactiva la animación después de 1 segundo
      comprobar(); // Comprobar el resultado después de finalizar la animación
      
      if (maquina === params.eleccion) {
        setResultado("Empate");
      } else if (reglas[params.eleccion][maquina]) {
        setResultado("Ganaste");
      } else {
        setResultado("Perdiste");
      }
    }, 1000); // Tiempo 
  
    return () => clearTimeout(timeout); // Limpiar el timeout si el componente se desmonta antes de que se complete
  }, [params.eleccion, maquina]);

  useEffect(() => {
    if (reglas[params.eleccion][maquina]) {
      const timeout = setTimeout(() => {
        setScore((prevScore) => prevScore + 1); // Aumenta el puntaje después de finalizar la animación
      }, 1000); 
  
      return () => clearTimeout(timeout); // Limpiar el timeout si el componente se desmonta antes de que se complete
    }
  }, [maquina]);

  // evitar que se pueda elegir en la pagina de resultado

  return (
    <div>
      <Puntos score={score} />
      <div className="pick">
        <div className="user">
          <h2 className="h2">Tú </h2>

          <div className="game">
            {params.eleccion === "papel" ? <Papel /> : ""}
            {params.eleccion === "tijera" ? <Tijera /> : ""}
            {params.eleccion === "piedra" ? <Piedra /> : ""}
          </div>
        </div>

        <div className="result">
          {/* verificamos si en el objeto reglas la opcion del user y de la maquina  
       (reglas['tijera','papel'] */}



<p className="results">{resultado}</p>


     

          <div className="boton">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Jugar Otra vez
            </Link>
          </div>
        </div>

        <div className="machine">
          <h2 className="h2">Maquina</h2>

          <div className="game">
            
          {isChoosing ? (
  
      <p className="maquinaEleccion">La máquina está eligiendo...</p>

    ) : (
    
      <>
        {maquina === "papel" ? <Papel /> : ""}
        {maquina === "tijera" ? <Tijera /> : ""}
        {maquina === "piedra" ? <Piedra /> : ""}
      </>
    )}




          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
