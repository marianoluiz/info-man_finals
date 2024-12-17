# Personal Data Forms Website

### Tech stacks:

###### Backend:

- Hibernate / HQL - orm
- Java - backend
- Spring Boot - backend apis

###### Frontend:

- React - frontend js library
- Scss - css pre-processor
- Bootstrap - frontend css framework
- Vite - frontend build tool

###### Database:
- MySQL 

EXPECTED DL: 12/17/2024

## Steps to run Frontend:

- `cd frontend`
- `npm install`
- `npm run dev`

## Steps to run Backend:

- `cd backend`
- `mvnw clean install`
- `mvnw spring-boot:run`

Notes:
- In the case that the spring boot app fails to start because the port 8080 is already taken, do the following:
  - Run CMD as admin
  - `netstat -ano | findstr :8080` Output: TCP    0.0.0.0:8080    0.0.0.0:0    LISTENING    1234
  - `taskkill /PID 1234 /F` Replace the "1234" PID based on the output of the first command
- Make sure to open the WebConfig.java class to ensure that the frontend port you are using is not blocked by the backend server.
