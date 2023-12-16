function applyBasicMaths(N,arr){
    //write code herex`
    let sum = 0;
    for(let i = 0 ; i < N ;i++){
        sum+= arr[i];
    }
    
    let flag = false;
    let ans =-1;
    
    for( let j = 0 ; j < N ; j++){
        let temp = sum  - arr[j];
        if(temp % 7 === 0){
            if(flag==false){
                ans = j
                flag = true;
            }else{
                if(arr[ans] > arr[j] ){
                    ans = j
                }
            } 
            
        }
    }
    
    console.log(ans)

}

// A is an array N elements. 
// I can remove one element.
// the rest number's sum should be divisible by 7
// find the first index of smallest number which 
//  satisfies the condition else print -1;


