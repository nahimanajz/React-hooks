const add1 = a => b =>a+b;
console.log(add1(10)(9));

function add(a) {
    return function(t) {
        return a+t;
    }
}
console.log(add(3)( 3));