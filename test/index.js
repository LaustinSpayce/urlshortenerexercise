"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const index_1 = __importDefault(require("../index"));
const chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default);
const should = chai_1.default.should();
describe("APIs", () => {
    it("GET root route", (done) => {
        chai_1.default
            .request(index_1.default)
            .get("/")
            .end((err, response) => {
            should.exist(response);
            (0, chai_1.expect)(response).to.have.status(200);
            response.body.should.be.an("object");
        });
        done();
    });
    it("POST a new link", (done) => {
        chai_1.default
            .request(index_1.default)
            .post("/makelink")
            .set("content-type", "application/x-www-form-urlencoded")
            .send({ inputURL: "www.palo-it.com/123456" })
            .end((err, resp) => {
            should.exist(resp);
            (0, chai_1.expect)(resp).to.have.status(200);
            resp.body.should.be.an("object");
        });
        done();
    });
});
