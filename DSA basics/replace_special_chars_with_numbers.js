let str = "*/-*/";
let N =  5;

function characters1DArray(N,str){
	//Enter Code Here
	
	let ans = "";
	for(let i = 0; i < N ; i++){
	    if(str[i]=="*") ans += "0";
	    else if( str[i]=="-") ans += "1";
	    else ans += "2";
	}
	console.log(ans);
}

// ans  : 02102;