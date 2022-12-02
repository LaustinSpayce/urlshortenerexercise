import chai, { expect } from "chai";
import app from "../index";
import chaihttp from "chai-http";
import { response } from "express";

chai.use(chaihttp);
const should = chai.should();

describe("APIs", () => {
  it("GET root route", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, response) => {
        should.exist(response);
        expect(response).to.have.status(200);
        response.body.should.be.an("object");
      });
    done();
  });

  it("POST a new link", (done) => {
    chai
      .request(app)
      .post("/makelink")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({ inputURL: "www.palo-it.com/123456" })
      .end((err, resp) => {
        should.exist(resp);
        expect(resp).to.have.status(200);
        resp.body.should.be.an("object");
      });
    done();
  });
});
