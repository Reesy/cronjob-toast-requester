# cronjob-toast-requester


This is a small node service that will pop up a OS level toast notification according to a cron expression, new notifications can be scheduled at a later date.


List of requests:

``` POST /api/v1/cron ``` - Given a valid cron expression, a title and a message a toast will appear multiple times according to the cron expression.

``` POST /api/v1/notify ``` - Given a valid title and message a toast message will appear.


To build the project:
    ``` npm run build ```

To run the project:
    ``` npm start ```

To test the project:
    ``` npm run test ```

To build and run the project:
    ``` npm run bas ```


---
Example ```/api/v1/cron``` request:
```
POST /login HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "cron":"* * * * * *",
    "title": "Title of the toast",
    "message": "This message will appear every second!"
}
```

Example response:
```
HTTP/1.1 200 OK
Server: My RESTful API
Content-Type: text/html; charset=utf-8
Content-Length: xy

Notification sent!

```
---

Example ```/api/v1/notify``` request:
```
POST /login HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "title": "One time toast",
    "message": "This will appear once per request!"
}
```

Example response:
```
HTTP/1.1 200 OK
Server: My RESTful API
Content-Type: text/html; charset=utf-8
Content-Length: xy

Notification sent!

```

# ```- Notice -``` 
This project doesn't persist the cron jobs across server restarts. A database needs to be added, as well as API's for managing current toasts. 

This isn't really an active/useful project, just something for fun. 