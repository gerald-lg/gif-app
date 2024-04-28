import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {


    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState( true );
    const getImages = async () => {
        const imgs = await getGifs(category);
        setImages(imgs);
        setIsLoading(false);
    }
    //este hook nos ayuda a disparar efectos secundarios,
    /* su primer argumento es el callback, y el segundo son las dependencias
    que va a tomar para ejecutar el callback, los [] significa que se va a 
    ejecutar cuando el componente se construya por primera vez
    */
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading,
    }
}
