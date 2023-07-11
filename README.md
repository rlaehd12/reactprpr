# 리액트 사용시 주의점

* jsx
  * 컴포넌트 등 사용시 반드시 pascal case 등 첫번째를 대문자로
    * jsx가 첫번째가 대문자여야지만 인식함, html은 소문자만 사용하기 때문에 구분하려고
  * function component에서 hook을 사용할 수 있게 되면서 class component보다 많이 사용하게 됨
    * 코드 가독성이 좀 더 좋아서, 스니펫 깔아놓으면 rcc(react class component)로 사용
  * 자바스크립트에서 class가 예약어여서 jsx에서 html class는 `<h1 className='내클래스'>제?목</h1>` 이런 식으로 사용
  * 중괄호`{}`로 자바스크립트 식을 감싸면 중괄호 안의 식을 평가해 결과값을 사용해야 한다는 뜻, 동적으로 데이터 제공 가능
  * jsx는 자바스크립트, 그래서 자바스크립트 함수 안에서 jsx 문법 사용 가능
    ```jsx
    <ul>
      {props.ingredients.map((ingredient, i)=>{
          <li key={i}>{ingredient}</li>
      })}
    </ul>
    ```

  * jsx에서 두개 이상의 태그는 반드시 다른 태그로 감싸져 있어야 함 뷰처럼
    * div같은걸로 감싸면 나중에 스타일 같은거 설정 어려우니 리액트 fragement `<>`로 감쌀 수 있음

* <React.StrictMode> 이 태그는 안에 있는 컴포넌트와 자손 컴포넌트까지 모두 위험상황 검사함. 디버깅 모드 아니면 무시되니까 무시해도 될듯?

## 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.

* 순수함수 : 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하기 때문입니다.
* 자신의 입력값을 변경하기 때문에 순수 함수가 아닙니다.
* 그래서 state 이용해서 상태 변경

  ```javascript
  // 순수함수 아님
  function withdraw(account, amount) {
    account.total -= amount;
  }
  ```

## react 는 모든 리렌더마다 컴포넌트라는 함수를 다시 실행합니다.

* setState를 한 그 렌더에서는 (정상적인 방법으로는) 렌더 이후의 변경된 값에 접근할 수 없습니다.
  * setState는 설정된 값을 넣고 다시 렌더링 해라 라는 명령어