# ga

## vo

* value object
* equals 는 값의 비교를 위해서, hashcode는 hashmap깉은거 비교하려고 오버라이드 함
* 오버라이드의 결과로 vo는 값이 동일하다면 같은 객체라고 본다
* vo는 immutable한 불변객체로 사용, setter말고 getter만 존재
  * 값은 생성할때 넣으면 됨
* vo는 lombok로 @data 어노테이션 달면 안됨

## DTO

* data transfer object, 데이터 전송 객체
* 처음에 DTO를 VO로 써서 책을 내서 지금까지도 헷갈릴 수 있음
* json 형태 데이터 통신 위해 serialize해서 쓰게 되는게 dto

## ENTITY

* 엔티티는 실제 DB 테이블과 매칭되는 클래스
* 서비스 계층에서만 사용하고 표현 계층 로직 가져가면 안됨
* 엔티티 DTO 분리 이유는 층별로 역할 분리, 엔티티의 영속성 지키려고