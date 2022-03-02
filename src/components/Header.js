import React from 'react'

function Header({money}) { //prop olarak money aldık
  return (
      
    <>
    <div className='money'>

        Harcamak için {money} $ paranız var.

    </div>

    
  </>
      

   
  )
}

export default Header