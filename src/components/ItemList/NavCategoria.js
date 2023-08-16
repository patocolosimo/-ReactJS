import React from 'react'
import { Link } from 'react-router-dom';

const NavCategoria = () => {
  return (
    <div id="titulo-categoria" className='paddingcategory'>
        <Link to="SportClans/product/futbol" className='button-74'>Futbol</Link>
        <Link to="SportClans/product/basquet" className='button-74'>Basquet</Link>
        <Link to="SportClans/product" className='button-74'>Todos</Link>
        
    </div>
  )
}

export default NavCategoria