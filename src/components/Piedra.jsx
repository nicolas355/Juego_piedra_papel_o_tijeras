import piedra from "../assets/img/icon-rock.svg";
import { Link } from 'react-router-dom'

const Piedra = () => {
  return (
    <div>
        <Link to={"/resultado/piedra"}>
          <div className="piedra ">
            <div className="fondo ">
              <img src={piedra} alt="" />
            </div>
          </div>
        </Link>

    </div>
  )
}

export default Piedra
