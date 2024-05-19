import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {



   const {images, isLoading} = useFetchGifs( category );
    
    
    return (
        <>
            {
                //and logico
                isLoading && ( <div className="card-grid"><span className="loader"></span></div> )
            }

            <h1 className='title__center'>{ category }</h1>
            
            <div className="card-grid">
                { images.map( (image) => (
                    // <li key={ id }> { title } </li>
                    <GifItem key={ image.id } 
                        // tecnica que se utiliza cuando existen muchas props, se esparcen las props
                        { ...image }
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}
