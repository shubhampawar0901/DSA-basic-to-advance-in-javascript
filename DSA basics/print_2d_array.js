function array2D(N,M,arr){
    //write code here
    
    for(let i = 0; i < N ; i++){
        let s = '';
        for(let j = 0 ; j  < M ; j++){
            s = s+ arr[i][j]+' ';
        }
        console.log(s);
    }
    
    
}
