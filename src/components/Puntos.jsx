
import imagen from '../assets/img/logo.svg'
const Puntos = ({score}) => {


  return (
<section>
<div className="contenedor">
        <div className="logo">

            <img src={imagen} alt="" />
        </div>

        <div className="score">
            <h2>Score</h2>
           <h2> {score} </h2>
        </div>


    </div>  
</section>
  )
}

export default Puntos
