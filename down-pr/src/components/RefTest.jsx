import React, { useRef, useState } from 'react'


export default function RefTest() {

  const [inputs, setInput] = useState({  // inputs state 2개 정의
    nname:'',
    nickname:'',
  });

  /*
  let 대신 useRef 사용하는 이유!!!
  useRef는 다시 렌더링 할때 값 재설정 하지 않음,
  let은 다시 렌더링 될때 다시 할당됨, 비효율적, 혹은 없어질수도
  */
  const nameInput = useRef()  // nameInput은 무언가를 가르키는 useRef객체, 파라미터를 넣으면 .current에 기본값 설정
  // 위에 비어있는 값 넣으면 undefined값이 기본값
  // console.log(nameInput.current, 'nameinput current 값');

  const {nname, nickname} = inputs  // 구조분해 할당

  const onChange = (e)=>{
    const {value, name} = e.target
    setInput({
      ...inputs,  // 기존 inputs 객체 복사한 뒤
      [name] : value,
    })
  }

  const onReset = ()=>{
    setInput({
      nname:'',
      nickname:'',
    })
    nameInput.current.focus()  // 특정 dom을 가르키는 nameInput객체의 current에 포커스를 이동
  }

  return (
    <div>
      <input type="text" 
      name='nname'
      placeholder='name'
      onChange={onChange}
      value={nname}
      ref={nameInput}  // nameInput 객체는 ref를 가르킴
      />

      <input type="text" 
      name='nickname'
      placeholder='nickname'
      onChange={onChange}
      value={nickname}
      />

      <button onClick={onReset}>reset</button>
      <div>
        {nname} {nickname}
      </div>
    </div>
  )
}
