var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    // 단어 추가
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    // 단어의 정의 반환
    Dict.prototype.get = function (term) {
        return this.words[term];
    };
    // 단어를 삭제
    Dict.prototype["delete"] = function (term) {
        delete this.words[term];
    };
    // 단어를 업데이트
    Dict.prototype.update = function (term, newterm) {
        if (this.words.hasOwnProperty(term)) {
            this.words[newterm] = this.words[term];
            delete this.words[term];
        }
    };
    // 딕셔너리의 단어를 모두 프린트
    Dict.prototype.showAll = function () {
        for (var _i = 0, _a = Object.entries(this.words); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            console.log("".concat(key, ": ").concat(value));
        }
    };
    // 딕셔너리 단어들의 총 수를 반환
    Dict.prototype.count = function () {
        return Object.keys(this.words).length;
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var dict = new Dict();
// add 단어 추가
var kimchi = new Word("kimchi", "한국 음식");
var canule = new Word("canule", "이탈리아 빵");
var rice = new Word("rice", "밥");
dict.add(kimchi);
dict.add(canule);
dict.add(rice);
// get 단어 정의 반환 => console.log로 출력함.
dict.get("kimchi");
console.log(dict.get("kimchi"));
// delete 단어를 삭제
dict["delete"]("kimchi");
// update 단어를 업데이트
dict.update("canule", "까눌레");
// showAll 단어 모두 프린트
dict.showAll();
// count 단어들의 총 수 반환
dict.count();
console.log(dict.count());
