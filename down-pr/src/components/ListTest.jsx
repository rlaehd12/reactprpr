import React, { useEffect, useState } from "react";
import axios from "axios";

const TMDB_API_KEY = "6aee34be99bb1d1b3fa358b709332b7e";

export default function ListTest() {
  const [testdata, setData] = useState("");
  console.log("ListTest rerendering..............................");

  useEffect(() => {
    // 마운트 될때, 혹은 dependency 있으면 변경될때마다
    // 사실 렌더링 끝난 이후에 작동함
    console.log("ListTest mount");
    axiosTest();

    return () => {
      // unmount 될때
      console.log("ListTest unmount!");
    };
  }, []);

  console.log(testdata, "testdata");

  function axiosTest() {
    setData("");
    setData([{ id: 1 }]);
    console.log("Listtest axios start!"); // 이 시점에서는 set하지 않아서 이전 데이터 출력됨
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=ko`,
    }).then((res) => {
      // console.log(res.data.genres);
      setTimeout(() => {
        setData(res.data.genres);
      }, 500);
    });
    setData([{ id: 5 }]);
  }

  // eslint-disable-next-line
  // const testdata_one = testdata.map((e)=>{
  //   console.log(e);
  // })

  return (
    <div>
      <div>ListTest</div>
      <button onClick={axiosTest}>List?</button>

      {/* 타이밍 때문에 && 반드시 이거 필요/ 데이터가 없을시 렌더링 막아야 함 */}
      {testdata ? (
        testdata.map((e) => {
          return (
            <div key={e.id}>
              {" "}
              {e.name} {e.id}{" "}
            </div>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}
