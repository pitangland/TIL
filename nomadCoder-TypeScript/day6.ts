type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // 단어 추가
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // 단어의 정의 반환
  get(term: string) {
    return this.words[term];
  }
  // 단어를 삭제
  delete(term: string) {
    delete this.words[term];
  }
  // 단어를 업데이트
  update(term: string, newterm: string) {
    if (this.words.hasOwnProperty(term)) {
      this.words[newterm] = this.words[term];
      delete this.words[term];
    }
  }
  // 딕셔너리의 단어를 모두 프린트
  showAll() {
    // Property 'entries' does not exist on type 'ObjectConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2017' or later.
    // 위와 같은 오류가 나는데 tsconfig.json 에 "lib" : ["es2019"]; 추가해주면 에러 안날듯.
    for (let [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value}`);
    }
  }
  // 딕셔너리 단어들의 총 수를 반환
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const dict = new Dict();

// add 단어 추가
const kimchi = new Word("kimchi", "한국 음식");
const canule = new Word("canule", "이탈리아 빵");
const rice = new Word("rice", "밥");
dict.add(kimchi);
dict.add(canule);
dict.add(rice);

// get 단어 정의 반환 => console.log로 출력함.
dict.get("kimchi");
console.log(dict.get("kimchi"));

// delete 단어를 삭제
dict.delete("kimchi");

// update 단어를 업데이트
dict.update("canule", "까눌레");

// showAll 단어 모두 프린트
dict.showAll();

// count 단어들의 총 수 반환
dict.count();
console.log(dict.count());
