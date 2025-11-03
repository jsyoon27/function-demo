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

function foo(arg) {
    console.log(arguments);
}

foo(1,2,3,4);
