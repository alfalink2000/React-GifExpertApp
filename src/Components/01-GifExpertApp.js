import React, { useState } from 'react'
import { AddCategory } from './02-AddCategory';
import { GifGrid } from './03-GifGrid';


//FC(Functional Component):

const GifExpertApp = () => {


  //Hablamos del hook useState para modificar el valor de una constante donde se le pasa al value un valor inicial
    const [categoria, setCategoria] = useState(['One Punch']);


  //const eventoClick = () => {
  //setCategoria( [ ...categoria, 'Hunter X Hunter']);
  //setCategoria(categoria => [ ...categoria, 'Hunter X Hunter'] );
  //}



   //Pasamos el metodo agregar nuevo elemento al input vacio del comp AddCategory como prop


  return (

    <>

      <h2>GifExpertApp</h2>

      <AddCategory setCategoria = { setCategoria }/>
    

      <hr></hr>

      <ol>
        { //El .map hace iteraciones por cada uno de los elementos y retorna un valor dado
          //Asignamos un key a medida que haga las iteraciones y mostramos elementos uno por uno 
           categoria.map( elem =>  (
           <GifGrid 
           key={elem} 
           categoria={elem}
           />)
        )}
      </ol>


    </>

  );

}

export default (GifExpertApp); //Asi se exportan tambien