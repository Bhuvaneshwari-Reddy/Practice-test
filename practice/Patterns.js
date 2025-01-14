/* 
 1 
 1 2 
 1 2 3 
 1 2 3 4 
 1 2 3 4 5 
*/

// let n=5;
// for(let i=1;i<=n;i++){
//     let line=" ";
// for(let j=1;j<=i;j++){
//     // console.log(j+" ")
//     // line+=j+" "
//     line=line+j+" "
// }
// console.log(line)

// }
 let n=5;
 for(let i=1;i<=n;i++){
let line=" "
for(let j=1;j<=i;j++){
  line =line +j+" ";
}
console.log(line)
 }
 for(let i=n-1;i>=1;i--){
  let line=" "
  for(let j=1;j<=i;j++){
    line =line+j+" "
  }
  console.log(line)
 }
 for(let i=n;i>=1;i--){
  let line =" "
  for(let j=n;j>=i;j--){
    line =line+j+" "
  }
  console.log(line)
 }

/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/
// let n=5;
// for(let i=1;i<=n;i++){

//     let line=""
//     for(let j=1;j<=i;j++)
//         {
//             line=line+j+" "
//         }
//         console.log(line)
// }
// for(let i=n;i>=1;i--){

//     let line=""
//     for(let j=1;j<=i;j++)
//         {
//             line=line+j+" "
//         }
//         console.log(line)
// }


/* 
1
2 3
4 5 6
7 8 9 10
*/

// let n=4;
// let num=1
// for(let i=1;i<=n;i++){
//  let line=""
//  for(let j=1;j<=i;j++){
//     line=line+num+" "
//     num++
//  }
//  console.log(line)
// }


/* 
    1
  1 1 1
1 1 1 1 1
  1 1 1
    1
*/

//     let n=3;
//     for(let i = 0;i < n;i++){
//     let line=""
//     for(let j = n - i ;j > 1 ;j--)
//     {
//         line =line+"  ";
//     }
//     for(let j = 0; j < 2 * i +1 ;j++){
//         line=line+"1 "
//     }
//     console.log(line)
//     }

//     for(let i=n-1;i>=0;i--){
// let line=""
// for(let j=n-i;j>1;j--){
//     line=line+"  "      
// }
// for(let j=0;j<2*i+1;j++)
// {
//     line=line+"1 "
// }
// console.log(line)
//     }


/* 
           1
         1 1
       1 1 1
     1 1 1 1
   1 1 1 1 1
*/
    // let n=5;
    // for(let i=1;i<=n;i++){
    // let line=""
    // for(let j=1;j<=n;j++){
    //     line=line+"  "
    // }
    // for(let k=1;k<=i;k++){
    // line=line+"1 "
    // }
    // console.log(line)

    // }


    /* 
            1
          2 1  
        3 2 1  
      4 3 2 1
    5 4 3 2 1
    */

    let n=5;
    for(let i=1;i<=n;i++){
        let line=""
        for(let j=1;j<=n-i;j++){
    line=line+"  "
}
for(let k=i;k>=1;k--){
        line=line+k+" "
    }
console.log(line)
    }


/* 
1
1 1
1 1 1 
1 1 1 1
1 1 1 1 1 
1 1 1 1 1 1

*/
let n=6;
for(let i=1;i<=n;i++){
    let line="";
    for(let j=1;j<=i;j++){
        line=line+"1 "
    }
    console.log(line)
}



let marks={
    English:80,
    Kannada:90,
    Hindi:60,
    Maths:79,
    Science:87,
    SocialScienece:98,
    Grades:{
      A:">80",
      B:">50&<80",
      C:">35&<50",
      D:"Fail"
    
    }
    
    }
    for(let m in marks){
      console.log(marks.Grades[m])
    }


    let n=5;
    let line=" ";
    for(let i=0;i<=n;i++){
      line =line+"1  ";
      console.log(line)
    }
   

    
  
    