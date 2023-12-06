
let N = 5; //length of array
let K = 9; //target value
let A = [3,0,2,7]; // array

function countSuchPairs(N,K,A){
    let count = 0;
    for( let i = 0 ; i < N ; i++){
        for(let j =i+1 ; j <N ; j++){
            if(A[i]+A[j]==K) count++;
        }
    }
    console.log(count);
}

//ans: 2
