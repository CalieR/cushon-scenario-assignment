# Cushon ISA Investment app

## Recruitment scenario submission

This is a small app created according to the recruitment scenario provided.  The app allows the user to select a fund from a list, and then provide an amount of money they would like to invest in that fund.  Once they have done this, they can view the details of that investment, and make another if they have sufficent allocation remaining.


## Pre-requisites

This app was built with the following tools and versions:

- node version lts/hydrogen
- npm version 11.0.0 

### Setup Instructions

To run the app locally - after cloning the repo, run the following commands from the root directory:

```
npm install
npm run dev
```



## Rationale and Execution

- After studying the brief, I spent some time on the NatWest Cushon website looking at the options currently available to retail (non-employee) customers.  

- I started to think about what the minimum requirements of the app were going to be, thought about the shape and content of the store, then determined an MVP.

- Once I'd decided on the elements I felt the app needed (and didn't need) to have, I was able to make decisions about what 'toolkit' to use, and settled on the following:

  - Vite + React + Typescript (with ESLint and Prettier)
  - Zustand for state management
  - Tailwind + DaisyUI for styling
  - Vitest with React Testing Library for testing

  With the exception of Zustand I have used all of these tools before, to varying degrees.  Zustand has been recommended to me previously so I did a bit of investigation and I found it incredibly easy to get started with.

 - I began building the types, the mock database, followed by the api's and the beginnings of the store.

 - After that I created empty components for the UI.  As I figured out what each needed and how to show and hide them, I built them out along with the store.

 - I tried not to get too sidetracked by styling: I added some tailwind classes as I went along to lay things out and replace the stock theme that came with Vite, but otherwise focused on that once the functionality was in.

## Decisions

I also made the following decisions around implementation:

- Use local storage to save a customer's investment. 

- Use a mock 'database' file to hold minimal details about the investable funds.

- Mock the app as though a customer is already logged in.

Not appropriate real-world solutions, but sufficient for the completion of this task.

## Assumptions

I made the following assumptions after looking at the scenario, and my own experience of completing this kind of online process:

- Fund information would be much more detailed, and subject to change frequently.  As such it would reside in a potentially complex database with multiple endpoints for accessing the details.

- The actual investment process would be far more complex.  The customer would need to be presented with more detailed fund information (percentage, risk profile etc) in accordance with legal requirements etc.  Presumably the app would integrate with 3rd party API's in order to provide credit-checking etc etc.

- Employee ISA holders already have a lot of their details pre-filled / submitted via the employer.  An individual / retail ISA application would need to collect a lot of personal information from a customer, so would probably require a wizard or similar to guide the user through the process.


## Future Enhancements

With more time, and if this were a real-world scenario, I would add the following enhancements:

- Robust testing and assertions, particularly around the rules concerning the monetary amount entered.

- Put the list of investments into a dedicated account section that could be accessed through a customer profile.

- Add authentication / login with a dedicated route for retail customers.

- Allow the customer to invest in multiple funds, perhaps use a checklist or multi-select grid to facilitate this from a ui point of view.  A new investment is currently stored in an object where the id and name of the selected fund are stored - an array could be used instead to save all of the funds selected by the customer.  More details needed around exactly how this should work in practice.

- Add Storybook to create a component library that can be developed in isolation from the rest of the application.

- Fully optimise for all screen sizes.

- Ensure adherance to a11y accessibility standards

- Ensure adherance to security considerations and optimisation needs.
