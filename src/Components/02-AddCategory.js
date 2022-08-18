
import React, { useState } from 'react'
import PropTypes from 'prop-types'

 export const AddCategory = ({ setCategoria }) => {
 
  //Para manejar cuando una persona escriba en el input 

  const [valueInput , setValueInput] = useState('');
  
  //Para ctualizar el valor que escriba en el campo 
  const eventoOneChange = ( e )=>{//Se recibe el evento 
        setValueInput(e.target.value);
  }

  const eventoSubmit=( e )=>{
        e.preventDefault(); //Para que no recargue el navegador al tocar enter
        setCategoria ( categoria => [ valueInput  , ...categoria ]);//Recibe el listado y agrega el nuevo valor del input 
  }
 
  return (
      
     <form onSubmit={eventoSubmit}>
       
      <input
          type='text'
          value={valueInput}  //Valor primero o ' '
          onChange={eventoOneChange }//Metodo de arriba en el clik sobre el input
      ></input>


      </form>
    
  )
}


AddCategory.propTypes = {
   setCategoria: PropTypes.func.isRequired//Decimos que es obligado recibir esta funcion 
}



