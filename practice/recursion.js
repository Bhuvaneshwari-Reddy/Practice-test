//recursion-maximum stack overflow,used for repeated data 


// let num=1;

// function xyz(){
//     console.log("hello world",num)
//     num++;
//     xyz();
// }  
//   xyz();


  //factorial of a number

  function fact(n){

    if(n==0){
        return 1;
    }else
     return n*fact(n-1)
  }

//   let num=5;
  let res=fact(5)
console.log(res)
