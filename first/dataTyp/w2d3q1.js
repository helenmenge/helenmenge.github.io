

function readNumber(arry){
    let sum=0;
    for(let i=0; i<arry.length;i++){
        if(typeof(parseInt(arry[i])) === "number"){
            return arr[i];
        }
    }
}
let arr=['123','123',"sd","123"];
console.log(readNumber(arr));

