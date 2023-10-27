import { Link } from 'react-router-dom'
import papel from "../assets/img/icon-paper.svg";
const Papel = () => {
  return (
    <div>
        <Link to={"/resultado/papel"}>
             <div className="papel">
          <div className="fondo">
            <img src={papel} alt="" />
          </div>
        </div>
        </Link>
    </div>
  )
}

export default Papel
