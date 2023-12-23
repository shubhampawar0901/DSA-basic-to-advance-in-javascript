function sumOfRows(N,M,arr){
    
    for(let i = 0; i < N ; i++){
        let s = 0;
        for(let j = 0 ; j  < M ; j++){
            s = s+ arr[i][j];
        }
        console.log(s);
    }
    

}
