import * as chai from "chai";
import * as chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp.default || chaiHttp);

describe("API Tests", () => {
  it("POST /books", () => {
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
  });
});