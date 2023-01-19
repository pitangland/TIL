### polymorphism (다형성)

generic이란, 타입의 placeholder 같은 것

제네릭은 네가 요구한 대로 signature를 생성해줄 수 있는 도구

타입스크립트는 제네릭을 처음 인식했을 때와 제네릭의 순서를 기반으로 제네릭의 타입을 알게됨.

```
type SuperPrint = {
    // 여기 들어올 타입이 확실하지 않을 때 제네릭을 씀.
    (arr: number[]) :void

    // TypePlaceholder가 call signature가 제네릭을 받는다는 걸 알려주는 방법
    <TypePlaceholder>(arr: TypePlaceholder[]) : void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(["a", "b", "c" ]) => 제대로 작동안함.. 왜? 제네릭 타입으로 써주자!
superPrint([1, 2, true, false]) => 제네릭 타입을 쓰면 이것또한 오류없이 작동.


type SuperPrint = <T, V>(a: T[], b: V) => T

superPrint : SuperPrint = (a) => a[0]

superPrint([1, 2, 3, 4], "x")
```

타입스크립트가 스스로 이게 어떤 타입인지 찾게하는 것이 제일 좋다.

```
제네릭을 다른 방법으로 사용하는 법

function superPrint<T> (a: T[]) {
    return a[0]
}

const a = superPrint([1, 2, 3, 4])
cosnt b = superPrint([true, false, true])
const c = superPrint([1, 2, true, false, "hello"])
```

제네릭을 쓰면서 타입이 확장되는 경우도 있고 타입을 생성할 수도 있음.

```
타입을 쓸 때,
Array<number> 이거나 number[] 나 똑같음.

type Player<T> = {
    name: string
    extraInfo: T
}

const pitang : Player<{favFood : string}> = {
    name: "pitang",
    extraInfo : {
        favFood: "kimchi"
    }
}
```
