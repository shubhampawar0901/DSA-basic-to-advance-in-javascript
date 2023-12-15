//   Print value of the string. value of a is 1, b is 2 and so on
function stringValue(S) {
    //write code here
    
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let ans =0;
    for(let i =0; i < S.length;i++){
        ans+= str.indexOf(S[i])+1;
    }
    console.log(ans)
  
  }
