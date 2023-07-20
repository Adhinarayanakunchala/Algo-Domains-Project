import React from 'react'


function Nav(p) {
  return (
    <div>
{p.name.map(function(n, index){

                    
                   return <h1 key= { index }> {n}</h1>
                    
                  })} 
    </div>
  )
}

export default Nav