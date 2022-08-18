import { useEffect, useState } from "react"
import { getGift } from "../helpers/PeticionAPI";


export const useFetchHook = (categoria) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGift(categoria)
            .then(img => {

                setTimeout(() => {

                    setstate({
                        data: img,
                        loading: false
                    })

                }, 3000);
            });
    }, [categoria]); //Si la categoria cambia si va a volver a ejecutar el useEfect



    return state;
}