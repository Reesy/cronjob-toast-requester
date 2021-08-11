import { agent as request } from "supertest"; 
import { expect } from 'chai';
import { describe } from 'mocha';

const baseURI = "localhost:8000";
const cronURIv1 = "/api/v1/cron"; 
const NotifyURIv1 = "/api/v1/notify";


describe(`When I call a bogus URI`, () => 
{ 
  let bogusURI = "/some/randomURI"

  it("Should return a 404 (if this fails CHECK If server is running and config is correct", async () => 
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

      const response = await request((baseURI)).post(cronURIv1).set({"cron":"* * * * * *"});
      expect(response.status).to.eql(200);
   
    });

  });

  describe("And I send an invalid request", () =>
  {

    describe(" with the day misspelt", () =>
    {

      it(" should return a 400", async () =>
      { 
        const response = await request((baseURI)).post(cronURIv1).set({"cron":"* * * * * Notaday"});
        expect(response.status).to.eql(400);
      
      });

    });
    
    describe(" with the wrong time", () =>
    {

      it(" should return a 400", async () =>
      {
        const response = await request((baseURI)).post(cronURIv1).set({"cron":"86 * * * * *"});
        expect(response.status).to.eql(400);
      
      });

    });

    describe(" with the whole body missing", () =>
    {
      
      it(" should return a 400", async () =>
      {
        const response = await request((baseURI)).post(cronURIv1).set({});
        expect(response.status).to.eql(400);
     
      });

    });
  
    describe(" with part of the body missing", () =>
    {

      it(" should return a 400", async () =>
      {

        const response = await request((baseURI)).post(cronURIv1).set({"cron":"* *"});
        expect(response.status).to.eql(400);
      });

    });

    describe(" with unknown elements", () =>
    {

      it(" should return a 400", async () =>
      {
        const response = await request((baseURI)).post(cronURIv1).set({"cron":"notAValidExpression"});
        expect(response.status).to.eql(400);
      
      });

    });

    describe(" with the cron property missing from the request", () =>
    {

      it(" should return a 400", async () =>
      {
        const response = await request((baseURI)).post(cronURIv1).set({"zzzz":"* * * * * *"});
        expect(response.status).to.eql(400);

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
      let requestBody = 
      {
        "title": "TestToast",
        "message": "This is a test toast"
      };
      const response = await request((baseURI))
            .post(NotifyURIv1)
            .send(requestBody)
            .set('Accept', 'application/json');
      
      expect(response.status).to.eql(200);
     
    });
  });

  describe(`And I send an invalid request`, () =>
  {
    
    describe(" with the notification message missing", () =>
    {
      
      it("Should return a 400", async () => 
      {
        const response = await request((baseURI)).post(NotifyURIv1);
        expect(response.status).to.eql(400);
      });
    
    });

    describe(" with the notification message being empty", () =>
    {
      
      it("Should return a 400", async () => 
      {
        let requestBody = 
        {
          "title": "TestToast",
          "message": ""
        };
        const response = await request((baseURI))
          .post(NotifyURIv1)
          .send(requestBody)
          .set('Accept', 'application/json');
          
          expect(response.status).to.eql(400);
          expect(response.text).to.eql("title and message properties should not be empty");
      });
    
    });

    describe(" where the notification exceeds 40 characters", () =>
    {
      
      it("Should return a 400", async () => 
      {

        let requestBody = 
        {
          "title": "TestToast",
          "message": "This message should be way over 40 characters, hopefully it does not pass!!!"
        };

        const response = await request((baseURI))
          .post(NotifyURIv1)
          .send(requestBody)
          .set('Accept', 'application/json');

        expect(response.status).to.eql(400);
        expect(response.text).to.eql("the notification message should be under 40 characters");
      });
    
    });
  
    describe(" where the title exceeds 20 characters", () =>
    {
      
      it("Should return a 400", async () => 
      {

        let requestBody = 
        {
          "title": "This should really be under 20 characters or it will look awful in the notifications window",
          "message": "Toast message"
        };

        const response = await request((baseURI))
          .post(NotifyURIv1)
          .send(requestBody)
          .set('Accept', 'application/json');

        expect(response.status).to.eql(400);
        expect(response.text).to.eql("the notification title should be under 20 characters");

      });
    
    });
  });

});