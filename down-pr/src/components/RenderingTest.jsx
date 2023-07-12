import React, { useState } from "react";
// import {useRef, useEffect} from 'react';

const RenderingTest = () => {
  console.log("Rendering MyComponent");

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default RenderingTest;

// ================================================ 함수 리렌더링 추적 훅

// function useTraceUpdate(props) {
//     const prev = useRef(props);
//     useEffect(() => {
//       const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
//         if (prev.current[k] !== v) {
//           ps[k] = [prev.current[k], v];
//         }
//         return ps;
//       }, {});
//       if (Object.keys(changedProps).length > 0) {
//         console.log('Changed props:', changedProps);
//       }
//       prev.current = props;
//     });
//   }

// // Usage
// function MyComponent(props) {
//   useTraceUpdate(props);
//   return <div>{props.children}</div>;
// }
