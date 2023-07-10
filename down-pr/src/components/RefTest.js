import React, { useRef, useState } from 'react'


export default function RefTest() {

  const [inputs, setInput] = useState({  // inputs state 2개 정의
    nname:'',
    nickname:'',
  });

  const nameInput = useRef()  // nameInput은 무언가를 가르키는 useRef객체

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
