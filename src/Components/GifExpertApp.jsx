import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
            <h1 className='animate__animated animate__hinge'>Gifs App</h1>
            <AddCategory setCategories={setCategories}/>            
            <hr />

            <ol>
                {
                categories.map(category => {
                    return <GifGrid category={category} key={category}/>
                })}
            </ol>

        </>
    )
}

export default GifExpertApp
