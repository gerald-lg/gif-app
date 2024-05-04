import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([ 'Haikyuu' ]);

    const onAddCategory = (input) => {

        if(categories.includes(input)) return;
        
        setCategories(cat => [ input , ...cat ]);
    }

    return (
        <>
        
             <div className="waviy title__center">
                <span style={{'--i': 1}}>G</span>
                <span style={{'--i': 2}}>I</span>
                <span style={{'--i': 3}}>F</span>
                <span style={{'--i': 4}}>E</span>
                <span style={{'--i': 5}}>X</span>
                <span style={{'--i': 6}}>P</span>
                <span style={{'--i': 7}}>E</span>
                <span style={{'--i': 8}}>R</span>
                <span style={{'--i': 9}}>T</span>
                <span style={{'--i': 10}}>A</span>
                <span style={{'--i': 11}}>P</span>
                <span style={{'--i': 12}}>P</span>
            </div>

            {/* // si lleva un "on" significa que esta emitiendo algo */}
            <AddCategory onNewCategory= { onAddCategory }/>

            { 
                categories.map(( category ) =>
                    <GifGrid key={ category } category={ category } />
                )
            }

        </>
    )
}
