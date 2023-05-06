# React Calculator - Exercise

> A project meant to exercise my skills in React with Redux. It is also designed to showcase good coding habits with these tool sets.

## Table of contents

- [General info](#general-info)
- [Commentary](#commentary)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)

## General info

Design and best practice goals and three main pieces.

- Make functions as small and testable as possible
- Code readability
- Design file structure to find desired pieces easily

> The first thing I did was make a conscious effort to design each function with Function Composition in mind. Creating small pieces of code that can be combined together to make the desired effects makes it much easier to test, reuse code. Readability also increases when doing this, especially when combining it with a file structure like reducks. Using spec/test files to show how something should be used is a great strategy to teach how the code works. I also rearranged the createSlice file to be a sort of specification file. It holds the layout and structure of the slice of state but the logic is in a reducers file that accompanies it.

There are many other techniques that and thought that went into this. Feel free to examine and check out the project to see what you can learn or find.

## Commentary

> Some of the features and design are challenges to myself. Doing a grid for example was just an exercise to do it that way instead of using flex.

## Technologies

- [JavsSript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/)
- [ViteJS](https://vitejs.dev/)
- [Redux](https://redux.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://testing-library.com/docs/ecosystem-jest-dom/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Markdown](https://daringfireball.net/projects/markdown/syntax)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [Reducks a](https://github.com/erikras/ducks-modular-redux)
- [Reducks b](https://github.com/alexnm/re-ducks)

## Setup

    git clone https://github.com/razorfrost44/React-Calculator.git
    npm run dev

## Status

Complete
