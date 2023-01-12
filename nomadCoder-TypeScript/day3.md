### call signatures

함수가 어떻게 구현되는지가 아닌
인자(arguments)의 타입이랑 함수의 반환 타입을 알려주는 것.

```
// call signatures
type Add = (a: number, b: number) => number;

const add = (a: number, b: number) => a+b
const add: Add = (a, b) => a+b
```
