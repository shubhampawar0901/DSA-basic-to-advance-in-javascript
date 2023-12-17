// write a program to find the sum of absolute difference between all such pairs (A{i}, A{j}) such that i <j and (j-i) is prime.

// Sample input 
// 1 2 3 5 7 12 ans 45
function sumOfSpecialPairs(N,A){
    //write code here
    let sum = 0;
    
    for(let i = 0;  i < N ;i++){
        
        for( let j = i+1; j < N; j++){
             
             if(i<j && diff_prime(i,j)==true){
                 
                 sum= sum+ Math.abs(A[j]-A[i]);
             }
        }
        
    }
    
    console.log(sum);

}

function diff_prime(i,j){
    
    if(j-i==2) return true;
    
    if(j-i==0 || j-i ==1) return false;
    
    for(let k =2 ; k <(j-i); k++){
        if((j-i)%k==0) return false;
    }

    return true;
}


