import React from "react";
import {useFetchGifs} from "../Hooks/useFetchGifs.jsx"
import {GifGridItem} from "./GifGridItem"


export const GifGrid = ({ category }) => {
const {data:images, loading} = useFetchGifs(category);
console.log(loading);

  return (
    <>
    <h3> {category} </h3>
    <div className="card-grid">
      {images.map((img) => {
        return <GifGridItem 
        img={img}
        key={img.id}
        {...img} />;
      })}
    </div>
    </>
  );
};

export default GifGrid;
