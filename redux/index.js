// npm init -> npm install redux

// redux만 설치된 프로젝트의 index.js 파일

// 리덕스 모듈 가져오기
const { createStore } = require('redux');

// data 기본
const nameData = {name : 'first'}

// action 객체 (주문서)
const actionChangeName = (newname) => {
    return {
        type : 'ACTION_CHANGE_NAME',
        payload: newname
    }
}

// reducer 함수
const postReducer = (state = nameData, action) => {
    switch(action.type) {
        case 'ACTION_CHANGE_NAME':
            return Object.assign({}, state, {...state, name: action.payload});
            break;
        default:
            return state;
    }
}

// store 생성 및 리듀서 등록
const store = createStore(postReducer);

// 수정 전
console.log(store.getState());

// 수정을 실행
store.dispatch(actionChangeName('second'));

// 수정 후
console.log(store.getState());

// 실행하는법
// terminal에 node index.js 치면 됨..!

console.log(store);
/*
{
    dispatch: [Function: dispatch],
    subscribe: [Function: subscribe],
    getState: [Function: getState],
    replaceReducer: [Function: replaceReducer],
    '@@observable': [Function: observable]
  }
  */