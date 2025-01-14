//callbacks


// function weekdays(callback) 
// {
//     callback()
//     console.log("The are 7 days in a week")    

// }


// function mon() {
//     console.log("Monday")    
// }

// weekdays(mon)

// function Tues() {
//     console.log("Tuesday")    
// }

// function Wec() {
//     console.log("Wednesday")    
// }

// function Thurs() {
//     console.log("Thursday")    
// }


// function weekdays(callback) {
//     callback();
//     console.log("There are 7 days in a week");    
// }

// function mon() {
//     console.log("Monday");    
// }

// weekdays(mon);

// function x(callback){
//     callback() 
 
// console.log("hello")    

// }

// function y(){

// console.log("how are you")
// }

// x(y)

// function add(x, y, callback)
// {
//       //  callback()
//         callback()
//         console.log(x+y) 
// }

// function Exe()
// {
//  console.log("Hello World")
// }

// function fun()
// {
//  console.log("Hello World1")
// }


// add(5,2, Exe, fun)



// function sub(a, b, callback)
// {
//     console.log(a-b)
//    // callback()
// }

// function Execution(){
//     console.log("The test case is passed")
// }

// sub(10,5, Execution)



// //Promise

// const promise1 = new Promise((resolve, reject)=>{
// let a=10;
// let b=20;
// if(a>b){
//   resolve("A is greater than B")
//  }
//  else{
//   reject("A is less than B")
//  }
//     setTimeout(() => {
//       console.log("Bhuvi")
//     }, 5000);

// })
// promise1.then((value)=>{
//     console.log(value)
// })



//console.log("Hello")




//callbacks with simple example

// console.log("hiiii")
// let a;


//     setTimeout(() => {
//         a=10;
//      console.log(a)
//     }, 2000);
//     //  console.log(a)
//      function b(){
//         console.log("hello")
//      }

//      setTimeout(b,2000)

// console.log("Bhuvi")


// function hello(){
//    console.log("hello")
// }



//callback example1
//  function hello(callback){
//    console.log("Helllo World")
//    callback();
//  }

//  function hii(){
//    console.log("Hii Dude")
//  }
//  hello(hii)


//  //callback example2

//  function sum(a,b,callback){
//     let res=a+b;
//     callback(res)
//   }
 
//   function displayres(res){
//     console.log(res)
//   }
//   sum(2,4,displayres);


  //callback hells==>nested within other callbacks while the function is asynchronous


//   function task1(callback){
//     setTimeout(() => {
//     console.log("task 1 completed")

//     callback()
// }, 2000);
//   }

  
//   function task2(callback){
//     setTimeout(() => {
//     console.log("task 2 completed")
//     callback()
// }, 1000);
//   }

 
//   function task3(callback){
//     setTimeout(() => {
//     console.log("task 3 completed")
//     callback()
// }, 4000);
//   }

//   function task4(callback){
//     setTimeout(() => {
//     console.log("task 4 completed")
//     callback()
// }, 3000);
//   }

// //   task1();
// //   task2();
// //   task3();
// //   task4();

// task1(function(){
//     task2(function(){
//         task3(function(){
//             task4(function(){

//             })
//         })
//     })
// })


// //or

// // task1(()=>{
// //     task2(()=>{
// //         task3(()=>{
// //             task4(()=>{

// //             })
// //         })
// //     })
// // })


function task1(callback){
  setTimeout(()=>{
    console.log("Task 1 completed")
    callback()
  },5000)
  
}

function task2(callback){

  setTimeout(()=>{
console.log("Task 2 completed")
callback()

  },2000)
}

function task3(callback){
  setTimeout(()=>{
console.log("Task 3 completed")
callback()
  },4000)
}

task1(()=>{
  task2(()=>{
    task3(()=>{

    })

  })
})




