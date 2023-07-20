import React from 'react'
import "./css/style.css"
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div className='nav'>
            <h1>
                Algo Domain
            </h1>
            <ul>
            <li><Link to="/addproduct" className='link'>Add/ModifyProduct</Link></li>
            <li><Link to="/getproducts" className='link'>GetProducts</Link></li>
            <li><Link to="/getproduct" className='link'>GetProduct</Link></li>
            <li><Link to="/deleteproduct" className='link'>DeleteProduct</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav