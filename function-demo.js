// - 함수의 실제 매개변수가 될 수 있다.
// - 함수의 반환값이 될 수 있다
// - 할당 명령문의 대상이 될 수 있다.
// - 동일비교의 대상이 될 수 있다.
// function foo(arg){
//     arg();
// }

// function bar() {
//     console.log('bar');
// }

// foo(bar);
// function foo(arg){
//     return arg;
// }

// function bar() {
//     console.log('bar');
// }

// foo(bar)();

// const foo = function (arg){
//     return arg;
// };

// foo(1);

// function foo(arg = 1) {
//     console.log(arg);
// }

// foo();

// function foo(arg, ...rest) {
//     console.log(rest);
// }

// foo(1,2,3,4);

// function foo(arg) {
//     console.log(arguments);
// }

// foo(1,2,3,4);


//함수 생성 방법

// function foo(){
//     console.log('foo');
// }

// foo();

// const foo =function (){
//     console.log('foo2');
// }

// foo();

// const foo = new Function ("console.log('foo3')")
// foo();

// const foo = () => {
//     console.log('foo4');
// };
// foo();

//IIFE
//재귀함수
//중첩함수
//콜백함수

// (function foo() {
//     console.log('foo');
// })()

// function foo(arg) {
//     if(arg === 3) return;
//     console.log(arg);

//     foo(arg + 1);
// }
// foo(1)
// function foo(arg) {
// function bar(){
//     console.log(arg);
//     }
//     bar();
// }
// foo(1)
function foo(arg){
    arg();
}
foo(()=>{
    console.log(1);
})