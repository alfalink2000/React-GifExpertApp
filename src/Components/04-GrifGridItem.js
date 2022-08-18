import React from 'react'

export const GrifGridItem = ({ title , url }) => {

  
   
  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <h3>{title}</h3>
    </div>
  )
}


