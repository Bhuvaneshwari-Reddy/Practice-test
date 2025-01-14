//example 1



// 
// 

// function add(args1,args2)
//     {
//        var result=args1+args2;
// return result;

//     } 


// describe ("test Suite",function (){
//     it("test the add method",function(){
//         let x =add(1,8)
//         expect(x).to.equal(9);
//     });
// });


//example2

// const chai=import("chai")
// const expect=chai.expect
// function a()
// {
//     console.log("hello world")
// }
// a()
// describe("test suite",function(){
//     it("test the input",function(){
// expect(a().to.include("hello world"));
//     })
// })



//import
// import {Myclass} from '../src/app.js';
// var obj=new Myclass();
// // var chai=require("chai")
// // var expect=chai.expect;
// import chai from 'chai';
//  const expect = chai.expect;
// describe ("test Suite",function (){
//    it("test the add method",function(){
// expect(obj.add(1,2)).to.be.equal(4)
//    })
// })


// import chai from 'chai';
// const expect = chai.expect;


// import chai from 'chai';
// const expect = chai.expect;
// //chaiHttp = require('chai-http');
// import chaiHttp from 'chai-http';
// chai.use(chaiHttp);



describe("The test cases reqres", function(){

it("Get Request", function(){
   chai
   .request('https://reqres.in/')
   .get('api/users/2')
    


})
})




















//    it("Sgnup", function(){
//      let url = "https://reqres.in/"
//      let end 
//    })
//    it("Login", function(){
//       console.log("Login to application")
//    })
//    it("Add to cart", function(){
//       console.log("Then add the product to the cart")
//    })
//    it("Payment", function(){
//       console.log("Do the payment")
//    })




// })
