// let sum=0;
// for(let i=1;i<=10;i++)
// {
//     sum=sum+i;

// }
// console.log(sum);

// for(i=10;i>=0;i--)
// {
//     if(i/3==0)
//     {
//         console.log(i)
//     }
// }


// for(let i=1; i<=3; i++)
// {
//     console.log("hello world")
// }

//odd and evem
// let n=10
// for(let i=1; i<=n; i++)
// {
//     if (i%2==0) {
//         console.log(i+" "+ "is an Even number")
//     }
//     // else{
//     //     console.log(i+" "+ "is an odd number")
//     // }

// }

//sum of even numbers
// let sum=0
// for(let i=1; i<=10; i++)
// {
//     if(i%2==0)
//     {
//         sum+=i
//     }
// }
// console.log(sum)


//prime number
let n=10; let count=0
for(let i=1; i<=n; i++)
{
    if(n%i==0)
        count++
}
if(count==2)
    { 
      console.log(n+" is an prime number")
    }
else{
    console.log(n+" is not an prime number")
}



