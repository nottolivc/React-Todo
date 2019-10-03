# React-Todo

A stateful class component project in the form of a to do list. Even though hooks are gaining popularity among react developers, class components are going to be around for a long time. 

## Initializing the project.

- `Fork and clone` this project and cd into your cloned version.
- `npm install` or `yarn install` will pull in all the node_modules you need.
- `npm start` or `yarn start` will start a development server on your `http://localhost:3000`.
  - If npm or yarn asks you to select different port with some error message, just confirm and it will pull it up on port 3001. This simply means you have a development server up and running on that port already.


- Todo data is an array of objects like this:

```js
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
```

- The `task` field is the todo title that will be shown to the user.
- The `completed` field should default to `false` and will be the field that we toggle when we complete a todo.
- The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.

`Clear Completed` button call your handler function that will filter out any todos that have the completed flag toggled to `true`.
- **Now is the time to style** Take your time to make this an app that you can be proud of.

#### Next Styling More and Data persist and Search

- **Persist your data** in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.

- **Search Functionality** Add a input bar that allows you to search through your tasks and only show the ones that match the search input.

- **Hosting** 

Deployed here: https://elated-hugle-d59c4f.netlify.com

