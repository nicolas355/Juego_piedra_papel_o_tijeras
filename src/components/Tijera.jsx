import { Link } from "react-router-dom";
import tijera from "../assets/img/icon-scissors.svg";
const Tijera = () => {
  return (
    <div>
           <Link to={"/resultado/tijera"}>
          <div  className="tijera">
            <div className="fondo">
              <img src={tijera} alt="" />
            </div>
          </div>
        </Link>
    </div>
  )
}

export default Tijera
