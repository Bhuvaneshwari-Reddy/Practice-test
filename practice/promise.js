// let promise=new Promise(function(resolve,reject){
// setTimeout(()=> resolve("Done"),1000)
// });
// promise.then(
//     result => console.log(result), // shows "done!" after 1.5 second
//     error => console.log(error) // doesn't run
//   );






// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("value 1")
//     },1000)
// });
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("value 2")
//     },2000)
// });
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ("value 3")
//     },3000)
// });
// // p1.then((value)=>{
// //     console.log(value)
// // })
// // p2.then((value)=>{
// //     console.log(value)
// // })
// // p3.then((value)=>{
// //     console.log(value)
// // })
// // let promise_all=Promise.all([p1,p2,p3])
// // promise_all.then((value)=>{
// //     console.log(value)
// // })


// // let a=()=>{
// //     console.log("Hello world")
// // }

// let vinay=()=> {
//     console.log("Hello vinay")
// }



// // let b = a()
// // console.log(b)
// function Hell0(vinay){
//     console.log("Hello World 1");
// }

// vinay(Hell0())


//promises

// function task1(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          const task1completed=true;
//          if(task1completed)
//          {
//             resolve("task 1 completed")
//          }else{
//             reject();
//          }
//       }, 2000);
//    })
// }

// function task2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          const task2completed=true;
//          if(task2completed){
//             resolve("task 2 completed")
//          }else{
//             reject();
//          }
         
//       }, 1000);
//    })
// }

// function task3(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          const task3completed=true;
//          if(task3completed){
//             resolve("task 3 completed")
//          }else{
//             reject();
//          }
//       }, 3000);
//    })
// }

//using promise op

// task1().then(value=>{
//    console.log(value);
//    return task2()
// }).then (value=>{
//    console.log(value)
//    return task3()
// }).then(value=>{
//    console.log(value)
//    console.log("all tasks completed")
// })



//async/await

//using asyn/awit op example

// async function alltaskscompleted(){
// try {
//    const task1res= await task1();
// console.log(task1res);

// const task2res=await task2();
// console.log(task2res)
// const task3res= await task3()
// console.log(task3res)
  

// console.log("all tasks completed")
// } 
// catch (error) 
// {
//    console.error(error);
// }
// }
// alltaskscompleted();



//example2
// async function bhuvi(){


// function task1(){
//       return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//             const task1completed=true;
//             if(task1completed)
//             {
//                resolve("task 1 completed")
//             }else{
//                reject();
//             }
//          }, 2000);
//       })
//    }
   
//    function task2(){
//       return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//             const task2completed=true;
//             if(task2completed){
//                resolve("task 2 completed")
//             }else{
//                reject();
//             }
            
//          }, 1000);
//       })
//    }
// let task1r=await task1()

// console.log(task1r)
// let task2r=await task2()
// console.log(task2r)


// }
// bhuvi();


//example 2

// async function operators()
// {

//    function add(a,b){
//   return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//             let res=false;
//             if(res){
//                resolve("sum of two numbers is"+"  " +(a+b))
//             }else
//             {
//                reject()
//             }
//          }, 2000);
//       })
//    }
//    function sub(a,b){
//       return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//             let res1=true;
//             if(res1){
//                resolve("sub of two numbers"+ " "+(a-b))
//             }else{
//                reject()
//             }
//          }, 3000);
//       })
//    }
// let add1=await add(5,5)
// console.log(add1)
// let sub1=await sub(5,4)
// console.log(sub1)


// }
// operators();


//example 3
// async function add(a,b){
//    let sum=new Promise((resolve,reject)=>{
//          resolve (a+b);

        
//    })
//    const res=await sum
//    console.log(res)
//    }
//    add(4,36);

   //example 4

   // let p1=new Promise((resolve,reject)=>{
   //    console.log("this promise is pending");
   //       setTimeout(() => {
   //          console.log("i am a promise and i have fullfilled")
   //       resolve(true)
         
   //       }, 2000);
   // })
   // let p2=new Promise((resolve,reject)=>{
   //    console.log("this promise is pending");
   //       setTimeout(() => {
   //          console.log("i am a promise and i have rejected")
   //        reject(new Error("i am an error"))
   //       }, 2000);
   // })
   // // console.log[p1,p2]


   // p1.then((value)=>{
   //    console.log(value)
   // })

   // p2.catch((error)=>{
   //    console.log("some error accured in p2") 
   //   })

   // p2.then((value)=>{
   //    console.log(value)
   // })


   //example 5

// let p=new Promise((resolve,reject)=>{
//    let a=1+6;
//    if(a==2){
//       resolve("success")

//    }else{
//       reject("failed")
//    }
// })
// p.then((message)=>{
//    console.log("this is then and"+ "  "+message)
// }).catch((message)=>{
//    console.log("this is in catch"+"  "+message)
// })

// p.then((value )=>{
//    console.log(value)}).catch((value)=>{
//       console.log (value)
//    })

   //example 6
//  function mathsoperations(a,b){
//       let add=new Promise((resolve,reject)=>{
//          let result=a+b;
//          if(result%2==0)
//          {
           
//     resolve("addition of two numbers which are divisible by 2 "+" "+result)
//    }
//    else{
//       reject("addition of two numbers which are not divisible by 2"+" "+result)
//    }
// })
// add.then((value)=>
// {
//    console.log(value)
// }).catch((value)=>{
//    console.log(value)
// }
// )
//  }
//  mathsoperations(9,20)


//promise

// let prom = new Promise((resolve, reject)=>{

//    let a=50
//    if(a%2!=0)
//    {
//       resolve("The number is divisible by 2")
//    }
//    else{
//       reject("The number is not divisible by 2")
//    }

// })

// prom.then((value)=>{
//    console.log(value+" "+"The promise is fulfilled")
// }).catch((value)=>{
//    console.log(value+" "+"The promise is not fulfilled")
// })


// async function add()
// {
//    try {
//       let sum=new Promise((resolve,reject)=>{
//          let a=100;
//          if(a%2!=0){
//             resolve("The promise is resolved")
   
//          }else{
//             reject("The promise is rejected")
//          }
//       })
//       let res=await sum;
//       console.log(res)
      
//    } catch (error) {
//     console.log(error)  
//    }
   
// }
// add()




//async and await

// async function weather(){

//    let mumbaiWeather = new Promise((resolve, reject)=>{

//       setTimeout(() => {
//          resolve("The temperature is 26 degrees")
//       }, 2000);
//    })

//    let delhiWeather = new Promise((resolve, reject)=>{

//       setTimeout(() => {
//          resolve("The temperature is 27 degrees")
//       }, 3000);
//    })

//    let BangaloreWeather = new Promise((resolve, reject)=>{

//       setTimeout(() => {
//          resolve("The temperature is 28 degrees")
//       }, 4000);
//    })

//    let a =await BangaloreWeather
//    let b =await delhiWeather
//    let c =await mumbaiWeather

//    // console.log(a)
//    // console.log(b)
//    // console.log(c)

//    return[a, b, c]

// }

// weather()


//asyn and await
// async function climate(){
// let Bangarpetclimate=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
// resolve("Bangarpet temoarature is 27 degrees")
//    },5000)
// })


// let KGFclimate=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("KGF temerature is 26 degrees")
// },2000)
// })

// let Kolarclimate=new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//    resolve("Kolar temperature is 25 degrees")
//  },7000)
// })
// let a=await Bangarpetclimate
// console.log(a)
// let b= await KGFclimate
// console.log(b)
// let c=await Kolarclimate
// console.log(c)
// }
// climate()


//Asyn and await

// async function climate(){
//  let BangarpetWeather=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        resolve("The temperature of Bangarpet is 27 degree")

//     },2000)
//  })
//  let KolarWeather=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
// resolve("The temperature of Kolar is  26 degree")
//    },1500)
//  })
//  let a=await BangarpetWeather
//  console.log(a)
//  let b=await KolarWeather
//  console.log(b)

// }
// climate()


async function add(){
   try {
      let sum=new Promise((resolve,reject)=>{
         let a=7;
         if(a%2==0){
            resolve("The number is divisible by 2")
         }
         else{

            reject("The number is not divisible by 2")
         }

      })
      let res=await sum;
      console.log(res)
      
   } catch (error) {
      console.log(error)
   }
}
add()


async function MyDetails(){

   try{
    let details=new Promise((resolve,reject)=>{

      let age=15;
      if(age>18){

         resolve("Eligible for voting")
      }
      else{
         reject("Not eligible for voting")
      }
    })

    let response=await details
    console.log(response)
   }
   catch(error){
      console.log(error)
   }
}
MyDetails()


async function marks(){
try {
   let mymarks=new Promise((resolve,reject)=>{
   let mathsmarks=50;
   if(mathsmarks>35){
      resolve("Passed")
   }
   else{
      reject("Fail")
   }
})
let result=await mymarks
console.log(result)
} catch (error) {
   console.log(error)
}

}
marks()


// let promise=new Promise((resolve,reject)=>{
//    let age=24;
//    if(age>=18){
//       resolve("Eligible for voting")
//    }
//    else{
//       reject("Not eligible for voting")
//    }
// })
// promise.then((result)=>{
//    console.log("success "+result)
// }).catch((error)=>{
//    console.log("Error"+error)
// })


async function Mydetails(){
try {
 let mydata=new Promise((resolve,reject)=>{
   let age=24;
   if(age>18){
      resolve("Eligibel for voting")
   }else{
      reject("Not Eligible for voting")
   }
 })
 let result=await mydata
 console.log(result)


   
} catch (error) {
   console.log(error)
}
}
Mydetails()


let xyz=["a","b","c","d"]
xyz.forEach((element)=>{
   console.log(element)
})