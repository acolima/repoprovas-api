# RepoProvas API

API for RepoProvas, a system for students to share their exams.

## Implemented features
- Create a new account 
- Login and logout
- Add a new exam
- See all the exams from a discipline sorted by terms
- See all the exams sorted by instructors
- Search for a discipline or a instructor to see only their exams

## Technologies
<p>
  <img src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' alt="Node"/>
  <img src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' alt="Express" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src='https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white' alt="Heroku" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
</p>

## How to run the project

1. Clone this repository
```
git clone git@github.com:acolima/repoprovas-api.git
```

2. Go to the project directory
```
 cd repoprovas-api
```

3. Install dependencies
```
npm i
```

4. Create a `.env` file with the same structure of `.env.example` and change the values of the enviroment variables
```
DATABASE_URL={POSTGRES CONNECTION STRING}
PORT=
JWT_SECRET=
```

5. Run the migrations and create the database
``` 
npx prisma migrate dev
```

6. Run project with
```
npm run dev
```
:star: API documentation can be found at the `Wiki` tab or <a href="https://github.com/acolima/repoprovas-api/wiki" target="_blank">here</a>

:star: You can check the front-end repository of this project <a href="https://github.com/acolima/repoprovas" target="_blank">here</a> and follow the instructions to run

## How to run the tests

1. Create a `.env.test` file with an enviroment variable named `DATABASE_URL`
``` 
DATABASE_URL={POSTGRES CONNECTION STRING FOR THE TESTS DATABASE}
```

2. Create the tests database
```
npm run test:migrate
```

3. Populate the tests database 
```
npm run test:seed
```

4. Run tests with
```bash 
npm run test
```

## Author

<img src='https://avatars.githubusercontent.com/acolima' width='150px'/>

<p>
  <a href='https://www.linkedin.com/in/ana-caroline-oliveira-lima/'>
    <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='LinkedIn' />
  </a>
  <a href='mailto:acolima@gmail.com'>
    <img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' alt='Gmail' />
  </a>
</p>
