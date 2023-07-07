import React, { Component } from 'react'

const mylist = [1,2,3,4,5,6]

// rfc react function component
// rcc react class component

// rafc 등 arrow 추가해서 가능


export default class Test extends Component {  // 화살표 함수 컴포넌트 예시
  render() {
    const item = mylist.map((product) =>{  // 화살표 함수 작성하고 {} 사용시 return 필요 /// react에서는 주로 map 사용
      return (
      <li  // 화살표 함수로 map을 리턴함, 그리고 변수에 담긴 함수를 render() 함수에 리턴값으로 집어 넣음
      key={product}  // 키는 없어도 되네 근데 없으면 브라우저 콘솔에서 오류 뜸
      >
        {product * 3}
      </li>
      )
    })

    return (
      // vue처럼 감싸주는 태그 반드시 필요
      <div>  
        {item}
      </div>
    )
  }
}
