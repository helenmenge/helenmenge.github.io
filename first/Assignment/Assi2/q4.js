function sumDigits(num){
    while(num!=0){
        let sum =sum + num % 10;
        num = num / 10;

    }
}
console.log(sumDigits())