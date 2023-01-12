### call signatures

함수가 어떻게 구현되는지가 아닌
인자(arguments)의 타입이랑 함수의 반환 타입을 알려주는 것.

```
// call signatures
type Add = (a: number, b: number) => number;

const add = (a: number, b: number) => a+b
const add: Add = (a, b) => a+b
```

---

### overloading

오버로딩은 함수가 여러개의 call signatures를 가지고 있을 때 발생시킴.

그냥 여러개가 아니라 서로 다른 여러 개의 call signature를 가졌을 때,

다른 여러개의 argument를 가지고 있을 때 발생하는 효과.

```
type Add = (a: number, b: number) => number; 를
type Add = {
    (a: number, b: number) : number
}
로 작성할 수 있는데 이런 방법이 존재하는 이유? 오버로딩 때문

아래는 가장 많이 볼 수 있는 예시
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string) : void
    (config: Config) : void
}

const push: Push = (config) => {
    if(typeof config === "string") {console.log(config)}
    else {
        console.log(config.path, config.state)
    }
}
```

파라미터의 개수가 다를 때 일어나는 경우

```
type Add = {
   (a: number, b: number) : number
   (a: number, b: number, c: number) : number,
}

// c는 선택사항이야 라고 말해주는 것임.
const add: Add = (a, b, c?: number) => {
    if(c) return a+b+c
   return a+b
}
```
