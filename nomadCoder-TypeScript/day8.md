### 타입스크립트로 블록체인 만들기

다형성을 이룰 수 있는 방법은, 제네릭을 사용하는 것.

```

interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key]
    }
    get(key: string): T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>()

stringStorage.get("cat") // string을 반환

const booleanStorage = new LocalStorage<boolean>()

booleanStorage.get("cat") // boolean을 반환
```
