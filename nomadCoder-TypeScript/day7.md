### 단어 사전 만들어보기 다시 한번 더 정리

```
type Words = {
    [key: string]: string
}

let dict : Words = {
    "potato" : "food"
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    def(term: string) {
        return this.words[term]
    }

    // static
    static hello() {
        return "hello"
    }

}

Dict.hello() => 잘 호출 됨.

class Word {
    constructor(
        // 이게 public 이어도 readonly 이면 읽기전용이기에 내용이 변경되지 않음.
        public readonly term: string,
        public readonly def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국 김치");

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi");

```

---

concreate 타입의 특정 값을 쓸 수도 있음

### interface

인터페이스는 객체 지향 프로그래밍의 개념을 활용해서 디자인 되었음

타입은 더 유연하고 조금 더 개방적이라고 말할 수 있음.

```

// type alias 를 만드는 데 사용할 수도 있음.
type Team = "read" | "blue" | "yellow"
type Health = 1 | 5 | 10

// 인터페이스보다 활용할 수 있는게 많다!
type Player = {
    nickName = string,
    team: Team
    health: Health
}

// 인터페이스는 오직 한 가지 용도만을 가지고 있다.
// 그건 오브젝트의 모양을 특정해주기 위한 것.
interface Player {
    nickName: string,
    team: Team,
    health: Health
}

// 위의 두개 모두 오브젝트의 모양을 결정한다는 같은 역할을 한다.

const pitang : Player = {
    nickName: "pitang",
    team: "pink" =>하면 오류가 남.
    team: "yellow",
    health: 10
}

// property를 축적시킬 수 있음 !
interface User {
    name: string
}

interface User {
    lastName: string
}

interface User {
    health: number
}

const pitang: User = {
    name: "pitang"
    lastName: "kim"
    health : 5
}

```

```
// 추상클래스는 이걸 상속받는 다른 클래스가 가질 Property와 메서드를 지정하도록 해줌

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}
    abstract sayHi(name: string) : string
    abstract fullName(): string
}

class Play extends User {
    // User를 상속받고 있으므로 fullName과 sayHi 가 구현되어야 함.
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// 위와 같이 코드를 짜게되면 js 파일로 변경했을 때 남아있음.
// 하지만 interface로 코드를 짜게되면 js 파일로 남지 않음.

// 또 다른 문제점은 private property 들을 사용하지 못한다는 것과
// 추상클래스에서는 constructor가 이 귀찮은 부분을 해주도록 할 수 있었지만
// 인터페이스를 사용하면, 이 부분을 해줄 constructor가 없음.

interface User {
    firstName: string,
    lastName: string,
    sayHi(name: string) : string
    fullName(): string
}

interface Human {
    health: number
}

class Player implements User, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

```
