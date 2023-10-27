import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='contenedor_center'>

        <h1>PIEDRA, PAPEL O TIJERA? </h1>


<div className="btn">
<Link className='start' to={"/seleccion"}>Comenzar</Link>
</div>



    </div>
  )
}

export default Start
