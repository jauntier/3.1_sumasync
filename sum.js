function sumAsync(num1, num2, callback){
    let result = num1 + num2;
    callback(result);
}

sumAsync(2, 3, printAddedNumbers);

function printAddedNumbers(result) {
    setTimeout(() => {
        console.log(result);
    },4000)
} 
