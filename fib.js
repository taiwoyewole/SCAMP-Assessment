function fib(n) {
    const arr = [0, 1];
    const fibSequence = {};
    let counter = 0;

    for(let i = 2; i <= n; i++) {
        let a = arr[i - 1];
        let b = arr[i - 2];
        arr.push(a + b);
    }

    for(let num in arr) {
        fibSequence[counter] = arr[num];
        counter++
    }
    return fibSequence;
}
console.log(fib(10));