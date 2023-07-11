import React, { Component, useState } from 'react'
import axios from 'axios'

/* 
// 종합
https://policy.nl.go.kr/openapi/searchKwdApi.do?kwd=지원
// 상세
https://policy.nl.go.kr/openapi/searchDetailApi.do?rec_key=SH1_UMO20201110369
*/

export default function AxiosTest() {

  // strictmode 켜져있으면 요청 여러번 보냄, 버그 잡을라고 한다는데 이게 버그 그자체인데
  // resTest()  // 왜 2번?????? 값 바뀔때마다 실행되는데 미친듯
  console.log('AxiosTest rerendering...');

  // 쓸데없는 에러 무시하는 코드
  // eslint-disable-next-line
  const [dogimgsrc, setSrc] = useState()

  function resTest(){
    console.log('??????????');
    axios({
      method:'get',
      url:'https://dog.ceo/api/breeds/image/random'
    })
    .then((res)=>{
      console.log(res);
      setSrc(res.data.message)
    })
  }

  function resClick() {
    resTest()
  }


  return (
    <>
      <div>AxiosTest</div>
      <button onClick={resClick}>check</button>
      <br />
      <img src={dogimgsrc} alt="" />
      <br />
      {dogimgsrc}
    </>
  )
}


// eslint-disable-next-line
class TestClass extends Component {
  testfunction(){  // 아 맞다 메서드만 단축 됐지
    console.log('test');
  }

  render() {
    return (
      <div>AxiosTest</div>
    )
  }
}
