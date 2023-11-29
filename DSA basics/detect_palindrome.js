
function detectPalindrome(num){
    //write code here
        let arr = [];
        // console.log(12%10-2)
        while(true){
            let n = num%10;
            arr.push(n);
            num = (num- num%10 )/10
            if(num<=0) break;
        } 
        let i = 0;
        let j =arr.length-1;
        let flag=true;
        // console.log(arr)
        while(true){
            if(arr[i]!=arr[j]){
                flag=false
                console.log("No");
                break;
            }
            i++;
            j--;
            if(i>j) break;
        }
        if(flag) console.log("Yes");
    }