function masaiPalSubString(S){

    let highestLength = 0;
    for(let i = 0; i < S.length; i++){
        let str =''
        for(let j =i;  j<S.length; j++){
            str +=S[j];
            let check = checkPalindrome(str)
            if(check >highestLength) highestLength=check;
        }
    }
    console.log(highestLength);
}

function checkPalindrome(str){
    let left = 0;
    let right = str.length-1 ;
    let flag = true;
    
    while(left< right){
        if(str[left]!=str[right]){
            flag = false;
            break;
        }
        left ++;
        right --;
    }

    if(flag==true) 
        return str.length
    else 
        return 0;
}

masaiPalSubString(thisisgoodracecar);
//ans 7