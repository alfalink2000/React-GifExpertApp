
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { GrifGridItem } from './04-GrifGridItem';
import { getGift } from '../helpers/PeticionAPI';
import { useFetchHook } from '../hooks/useFetchHook';


export const GifGrid = ({ categoria }) => {

    //Con usf creamos mas rapido un useState

    // const [images, setImages] = useState( [] );//Crea una lista vacia 

    //Esta funcion useEffect nos permite que aunque React actualice la pagina no recargue o repita 
    //el Fetch o peticion http cada vez que suceda algun cambio 

    const {data:images , loading} = useFetchHook(categoria); //Asi se renombra en la desestructuracion





    
    return (
        <>
            <h3>{categoria}</h3>
            
            { loading && <p>Loading...</p> }    

            <div className='card-grid'>
             
                <ol>

                    {
                        //Entre () Retornamos un objeto de html , y entre { } es javascript no se vera el html  
                        images.map((img) => (
                            //Al mandar ...img es como mandar todos los elementos con sus propiedades
                            //Y lo recibimos como prop de manera desestructurada para recibir los elementos  
                            < GrifGridItem key={img.id}  {...img} /> //Props a enviar 

                        )
                        )


                    }
                </ol>

            </div>
        </>//Para devolver mas de un objeto fragment
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}




