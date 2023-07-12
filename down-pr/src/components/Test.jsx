import React, { useState } from "react";

export default function Test() {
  const [number, setNumber] = useState(0);

  const increase = function () {
    console.log("+1");
    setNumber(number + 1);
  };
  const decrease = function () {
    console.log("-1");
    setNumber(number - 1);
  };

  const [inputs, setInput] = useState({
    first: "",
    second: "",
  });

  // 분해할당이용 아래 코드 두줄을 하나로 줄인거
  // first = inputs.first
  // second = inputs.second
  const { first, second } = inputs;

  // ...이 뭔지 모르겠어서 테스트용================================================
  // const testt = {a:1, b:2, c:3}
  // const aa = ()=>{
  //     return {
  //         ...testt,
  //         d:3
  //     }
  // }
  // const bb = ()=>{
  //     console.log(aa());
  // }
  // =============================================================================
  const onChange = (e) => {
    // 구조 분해 할당 이용
    // value = e.target.value
    // name = e.target.name
    const { value, name } = e.target;

    // 접근 방식 (1)
    // setInput({
    //     ...inputs,
    //     [name]:value
    // })

    /*
        이 접근 방식(2)을 사용하면 React는 이 내부 함수에서 제공하는 상태 스냅샷이 
        항상 최신 상태 스냅샷이 되도록 보장하며 모든 예약된 상태 업데이트를 염두에 두고 있다.
        */
    setInput((prevState) => {
      // 방식(2) 이게 더 좋은 방법?
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div>Test</div>
      <h1> {number} </h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <input
        type="text"
        name="first"
        onChange={onChange}
        value={first}
        placeholder="11"
      />
      <input
        type="text"
        name="second"
        onChange={onChange}
        value={second}
        placeholder="22"
      />
      {/* <button onClick={bb}>testtttttt</button> */}
      <h1>{first}</h1>
    </>
  );
}
