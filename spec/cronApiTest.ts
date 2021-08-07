
import { agent as request } from "supertest"; 
import { expect } from 'chai';
import { describe } from 'mocha';

describe("GET /", () => 
{ 
  it("Should return a 200", async () => 
  {
    const response = await request(("localhost:8000")).get("/");

    expect(response.status).to.eql(200);
    // expect(response.body.data.length).to.eql(30);
  });
});