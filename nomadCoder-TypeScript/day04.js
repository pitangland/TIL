"use strict";
/*
현재까지 배운 것을 토대로, 두 함수에 대한 구현과 함께 호출 시그니처(call signatures)를 작성

last(arr): 이 함수는 배열의 마지막 요소를 반환해야 함.
prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return 해야 함.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var last = function (arr) { return arr[arr.length - 1]; };
var a = last([1, 2, 3, 4]);
var b = last(["x", "y", false, true, 1, "xy"]);
console.log(a, b);
var prepend = function (arr, item) { return __spreadArray([item], arr, true); };
var arr1 = prepend([1, 2, 3, 4], "5");
var arr2 = prepend(["x", "y", false, true, 1, "xy"], "xyx");
console.log(arr1, arr2);
// npx tsc 파일이름 -> js 파일로 컴파일 됨!
// ts 파일과 js 파일을 같이 오픈했을 때 오류나는 것은 tsconfig.json이 없기에
// 또는 해결하는 방법은 export 해주면 됨.
