### 객체지향 사용법

타입스크립트는 생성자를 알아서 만들어준다.

```
ts

class Player {
    constructor(
        private firstName: string,
        private lastName: string
        public nickName: string
    )
}

const pitang = new Player("pitang", "las", "pitangggg");


=> js
class Player {
    constructor(firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
}
```

### 추상 클래스

오직 다른곳에서 상속받을수만 있는 클래스, 직접 인스턴스를 만들지 못함.

```

abstract class User {
    constructor(
        // private 필드들은 인스턴스 밖에서 접근할 수가 없고,
        // 다른 자식 클래스에서도 접근할 수 없음.
        private firstName: string,
        private lastName: string
        private nickName: string

        // 다른 자식 클래스에서 사용되기를 원한다면 private을 쓰지말길
        // 대신 protected를 사용.
        protected firstName: string,
        protected lastName: string
        protected nickName: string
    ) {}

    //추상메소드는 네가 추상 클래스를 상속받는 모든 것들이
    //구현을 해야하는 메소드를 의미
    abstract getNickName(): void

    // 메소드라 하는데 클래스안에 존재하는 함수.
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User {
    getNickName() {
        console.log(this.nickName)
    }
}

const pitang = new Player("pitang", "las", "pitangggg");

pitang.getFullName()

```

---

### 단어 사전 만들어보기

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
    add(word: Words) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    def(term: string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국 김치");

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi");

```
