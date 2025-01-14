// let a=()=>{
//     console.log("hello World") 
//  }
 
//  a()
// let b=()=>{
// //statements of codes
// }
// //normal function
// function xyz(){

// }

// let c=()=>{
//     console.log("Hello India")
// }
// c()

  // const sayHello=function(name){
  //   return "Hey there "+name+"!"
  // }
  // console.log((sayHello("Swami")))
  
  // const sayHello=(name)=>{
  //   return "Hey there "+name+"!"
  // }
  // console.log((sayHello("Swami")))
  const sayHello=(name)=>`Hey there${name} !`
  console.log((sayHello("Swami")))
   
  const obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c() {
      console.log(this.i, this);
    },
  };
  
  obj.b(); 
  obj.c(); 



  // class person{
  // constructor(name,age){
  // this.name=name;
  // this.age=age;
  // }
  // greet(){
  // console.log(`my name is ${this.name} and my age is ${this.age}`)
  // }
  // }
  // const person1=new person("Bhuvana",24);
  // console.log(person1.name);
  // console.log(person1.age);
  // person1.greet();


  const xyz=()=>{

  }
  const xyz1=new xyz()
  console.log(xyz1)