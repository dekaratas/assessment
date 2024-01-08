const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const should = chai.should();
describe("API Tests", () => {
  describe("/books Requests", () => {
    it("should create a new book", (done) => {
      chai.request(app)
        .post("/books")
        .send({
          title: "TestBook",
          description: "TestDescription",
          isbn: "TestIsbn",
          price: 9.99
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
    it("should list an array containing all books", (done) => {
      chai.request(app)
      .get("/books")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
    });
  });
});