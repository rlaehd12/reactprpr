import React, { useState } from 'react'
import axios from 'axios'

const TMDB_API_KEY = '6aee34be99bb1d1b3fa358b709332b7e'

export default function ListTest() {
  const [testdata, setData] = useState('')
  console.log(testdata);
  console.log('rerendering..............................');

  function axiosTest() {
    console.log('start!');
    axios({
      method:'get',
      url:`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=ko`
    })
    .then((res)=>{
      // console.log(res.data.genres);
      setData(res.data.genres)
    })
  }

  return (
    <div>
      <div>ListTest</div>
      <button onClick={axiosTest}>List?</button>
    </div>
  )
}
