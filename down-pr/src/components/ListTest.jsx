import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TMDB_API_KEY = '6aee34be99bb1d1b3fa358b709332b7e'

export default function ListTest() {
  const [testdata, setData] = useState('')
  console.log('ListTest rerendering..............................');
  
  useEffect(() => {
    // 마운트 될때, 혹은 dependency 있으면 변경될때마다
    // 사실 렌더링 끝난 이후에 작동함
    console.log('ListTest mount');
    axiosTest()
    
    return () => {
      // unmount 될때
      // 컴포넌트 리렌더링 할때 일단 unmount 하고 다시 mount함
      console.log('ListTest unmount!');
    }
  }, [])
  
  console.log(testdata, 'testdata');
  
  function axiosTest() {
    console.log('Listtest axios start!');
    axios({
      method:'get',
      url:`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=ko`
    })
    .then((res)=>{
      // console.log(res.data.genres);
      setData(res.data.genres)
    })
  }

  // eslint-disable-next-line
  // const testdata_one = testdata.map((e)=>{
  //   console.log(e);
  // })

  return (
    <div>
      <div>ListTest</div>
      <button onClick={axiosTest}>List?</button>

      {/* 타이밍 때문에 && 반드시 이거 필요 */}
      {testdata &&
      testdata.map((e)=>{
        return <div key={e.id}>{e.name}</div>
      })}
    </div>
  )
}
