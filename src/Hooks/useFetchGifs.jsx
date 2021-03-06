import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
      getGifs(category)
      .then(img => {
          console.log(img)
          setState({
              data: img,
              loading: false
          })
      })
  }, [category]);

//   setTimeout(() => {
//     setState({
//       data: [1, 2, 3, 4, 5],
//       loading: false,
//     });
//   }, 3000);

  return state;
};
