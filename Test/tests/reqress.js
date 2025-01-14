// import chai from 'chai';
// const expect = chai.expect;
// import chaiHttp from 'chai-http';
// chai.use(chaiHttp);


const chai=require ("chai");
const chaiHttp=require("chai-http");
const expect=chai.expect;
chai.use(chaiHttp)



describe("The test cases reqres", function(){

it("get the single user",(done)=>{

    chai
       .request("https://reqres.in/")
       .get("/api/users/2")
       .end((reject,resolve)=>{
       expect(resolve).to.have.status(200)
       done()

       })
})


})


