# Errors

The main errors that need to be corrected are:

1. Responsive Design
2. Main Screen layouts

# Refactor

The main points to refactor:

1. Change the use of React Context to Redux
   - Context is a messy setup, and from my point of view not as scalable as a Redux implementation
     - For example with the use of Redux I will not call trainerAssigment service on customer satisfaction service
2. Add more trainer dinamycally, instead of increasing the number of loops
   - For example adding a modal before loading the form, asking the user the number of trainer that want to load or just adding a `+` and `-` button
3. Add validation to the first form:
   - Check inputs are valid and filled
4. Organise the architecture of components and screen management
   ```
   .
   ├── ...
   ├── components
   │   ├── component1
   │   │   ├── component1.tsx
   │   │   └── component1.css
   │   ├── component2
   │   └── component3
   └── ...
   ```
5. Algorithm refactor

   - Change that for customer satisfaction calc you call again the customer allocation method (with Redux it could be easily solved)
   - Customer allocation and customer satisfaction algorithm:
     - I would like to add more values to allocate the customers, give a value to aech trainer parameter based on each customer preferences, such as:
       - Age
       - Sex
       - Type/discipline of trainings
       - Cost of the trainer Vs Cost that the customer could accept
       - Trainer influence (using for example Social Media followers) and used if we know that the customers uses that kind of social media
   - If the previous point is implemented I could get better values of customer satisfaction, with more information, giving specific result for each customer preference and a global score

6. Transfer responsability of calcs to a backend service
7. Use the lintern applied to the project and implement where needed TypeScript

# New Features or implementations

Include testing in critical points:

```
    Unit testing for algorithm calcs
    Lintern code before deploying
```
