function sumOfIndexes(N,M,arr){
    
    for(let i = 0; i < N ; i++){
        let str = '';
        for(let j = 0 ; j  < M ; j++){
            sum = i + j;
            str += sum +' ';
        }
        console.log(str);
    }
}
