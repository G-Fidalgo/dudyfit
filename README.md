# DudyFit

It is an application for assigning clients (with preferences) to a series of trainers

It consists of a first form where we will fill in the information of the trainers and where we will be able to visualise the pre-loaded information of the clients

Then we will be able to see the distribution of the clients by trainers and the satisfaction index of each client and the reason for this satisfaction

## Trainer assignment algorithm

The allocation of coaches has taken into account the rating of each coach and the importance that each client attaches to the rating of their coach

For this purpose, the clients are ranked in order of importance from highest to lowest

On the other hand, the coaches are ordered by the rating they have, from the lowest to the highest, so that subsequently the number of clients can be assigned until the limit of each coach is reached

## Customer satisfaction

To calculate the satisfaction index in the most basic way, we compare the importance given by the clients to the coach's rating versus the rating of the assigned coach

If this comparison results in a value for the client that is higher or equal to the trainer's rating, a value of satisfied is given, otherwise a value of not very satisfied

## Technologies ![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&logoWidth=30)

This project is made with React, and implements:

- **React router dom**
- **React Context**
- **Bootstrap 4**

### Manteinance

`Start the app`

From your terminal run:

**For first time:**

```
yarn install
```

**To start the project:**

```
yarn run start
```

Runs the app in the development mode.\
Open [http://localhost:3000/form](http://localhost:3000/form) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

**To build the project:**

```
yarn run build
```

**To lint the project:**

```
yarn run lint:ts
```

## CI/CD

The project has an automatic deployment pipeline that can run test or the lintern and then deploy to heroku directly, this pipeline can be managed on the `.github/workflows/ci.yml`

## Check toDo

Check out the **to do list with main errors, refactors and new implementations** list:

[toDo markdown file](toDo.md)
