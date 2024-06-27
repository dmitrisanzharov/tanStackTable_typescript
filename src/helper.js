let arr = [3,2,4,1,5];
// let arr = [1,2,3,4].reverse();


arr.sort((b,a)=> {
    console.log(a);
    console.log(b);
   
    if(a > b){
        return 1; // a is first, b is second
    }

    if(b > a){
        return -1; // b goes first, a goes second
    }

    return 0;
   
});


console.log(arr);