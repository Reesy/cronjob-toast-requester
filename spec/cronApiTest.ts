import { agent as request } from "supertest"; 
import { expect } from 'chai';
import { describe } from 'mocha';

const baseURI = "http://localhost:3000";
const cronURIv1 = "/api/v1/cron"; 
const NotifyURIv1 = "/api/v1/notify";


describe(`When I call a bogus URI`, () => 
{ 
  let bogusURI = "/some/randomURI"

  it("Should return a 404", async () => 
  {

    const response = await request((baseURI)).get(bogusURI);
    expect(response.status).to.eql(404);
  
  });

});

describe(`When I call ${cronURIv1}`, () => 
{ 

  describe("And I send a valid request", () =>
  {

    it("Should return a 200", async () =>
    {

      const response = await request((baseURI)).get(cronURIv1);
      expect(response.status).to.eql(200);
   
    });

  });

  describe("And I send an invalid request", () =>
  {

    describe(" with the day misspelt", () =>
    {

      it(" should return a 400", async () =>
      {

        expect(true).to.eql(false);
      
      });

    });
    
    describe(" with the wrong time", () =>
    {

      it(" should return a 400", async () =>
      {

        expect(true).to.eql(false);
      
      });

    });

    describe(" with the whole body missing", () =>
    {
      
      it(" should return a 400", async () =>
      {

        expect(true).to.eql(false);
     
      });

    });
  
    describe(" with part of the body missing", () =>
    {

      it(" should return a 400", async () =>
      {

        expect(true).to.eql(false);
     
      });

    });

    describe(" with unknown elements", () =>
    {

      it(" should return a 400", async () =>
      {

        expect(true).to.eql(false);
      
      });

    });

    describe(" with the cron property missing from the request", () =>
    {

      it(" should return a 400", async () =>
      {

        expect(true).to.eql(false);

      });
      
    });

  });

});

describe(`When I call ${NotifyURIv1}`, () => 
{ 
  
  describe("And I send a valid request", () =>
  {
    
    it("Should return a 200", async () => 
    {
      const response = await request((baseURI)).get(cronURIv1);

      expect(response.status).to.eql(200);
    });
  });

  describe(`And I send an invalid request`, () =>
  {
    
    describe(" with the notification message missing", () =>
    {
      
      it("Should return a 400", async () => 
      {
        expect(true).to.eql(false);
      });
    
    });

    describe(" where the notification exceeds 40 characters", () =>
    {
      
      it("Should return a 400", async () => 
      {
        expect(true).to.eql(false);
      });
    
    });
  
  });

});