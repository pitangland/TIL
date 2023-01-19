자바스크립트는 실수를 피할 수 없음.

런타임 에러를 마주치는건 user임.

타입스크립트는 ? 강타입 프로그래밍 언어.

타입스크립트 => 자바스크립트로 변환됨.

변수를 어떤 타입인지 저장해줘야 함.

타입스크립트는 타입을 추론해줌.

let b : boolean = "x" => 오류가 남!
let b : boolean = false => 오류 안남!

가능한 타입스크립트가 추론하게 놔두는게 좋을 때도 있음

```
// Alias 를 만들 수 있음. 어느 타입에나 적용할 수 있음.
type Player = {
    name: string,
    age?: number
}

const player = {
    // 타입을 Alias 로 만들 수 있음.
    name: string,
    age?: number => ? number | undefined (선택적 변수)
} = {
    name: "pitang",
}

const player2 : Player = {
    name: "terry"
    age:12
}


// : Player 가 return 타입을 정해준 것이다.
function playerMarker(name: string) : Player {
    return {
        name: name,
    }
}

위에와 같은 식은
const PlayerMarker = (name: string) : Player => ({name})

const pitang = playerMarker("pitang")
pitang.age = 12

```

### readonly

```
const numbers: readonly number[] = [1, 2, 3, 4]
numbers.push(1) => 에러가 남.
```

### tuple

내가 원하는 순서에 맞게, 타입에 맞게 들어와야 하고 최소 타입의 개수만큼 들어와야 함.

```
const player : readonly [string, number , boolean] = ["pitang", 1, true]
player[0] = 1 => string 이여야 하니까 오류남.
```

### null & undefined & any

null과 undefined 모두 위와 같이 정의 할 수 있음.

any 는 처음 보는 타입임.
any는 Typescript 로부터 빠져나오고 싶을 때 쓰는 타입.

타입스크립트에서 바보같은짓을 허용받고 싶다면 any를 사용.

any는 타입스크립트의 모든 보호장치를 비활성화 시킴.

```
const a : any[] = [1, 2, 3, 4]
const b : any = true

a+b 를 해도 오류가 생기지 않음.
```

### unknown & void & never

변수의 타입을 미리 알지 못할 때 Unknown 사용.

아무것도 리턴하지 않는 값에 void 사용. 생략할 수 있음.

타입스크립트가 알아서 아무것도 리턴하는게 없다고 인식함.

never 는 함수가 절대 return 하지 않을 때 발생.

```
function hello() : never {
    throw new Error("xxx")
}

function hello(name: string | number) {
    if(typeof name === "string") {
        name => string 이 될 것임.
    } else if(typeof name === "number") {
        name => number 가 될 것임.
    } else {
        name => never 타입이 됨. 절대 반환하면 안되는
    }
}
```
