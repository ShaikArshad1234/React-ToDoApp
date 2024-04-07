                                          # ToDo App Actions
# Task:
A app that keeps track of your to-do actions, you can add any number of tasks to it, search those tasks, click on the checkbox to complete the task, and filter using buttons like active tasks, completed tasks and all the tasks. 
A app that keeps track of your to-do actions, you can add any number of tasks to it, search those tasks, click on the checkbox to complete the task, and filter using buttons like active tasks, completed tasks and all the tasks. This is another great project for you to add to your portfolio as a beginner React developer design 

# Creating a to-do list app with React is a fantastic project for building the skills.

Setup React Project: Use Create React App project.
npx create-react-app todo-app
cd todo-app
Once the app is created, you can start editing the files in the src directory.
Here's a basic structure of how you can implement your to-do list app:
App.jsx
App.css

# Component Structure:

The app maintains state for tasks using the useState hook.
The addTask function adds a new task to the list when the user clicks "Add Task".
The toggleTask function toggles the completed status of a task when the checkbox is clicked.
The deleteTask function removes a task from the list when the user clicks "Delete".
Buttons allow filtering tasks based on whether they are active, completed, or to display all tasks.
Added a state searchTerm to store the search term entered by the user.
Added an input field to allow the user to search for tasks by typing in a search term.
Implemented filtering based on both completion status and search term.
Modified the filteredTasks array to include filtering based on the search term.
Added an input field and buttons to filter tasks based on their completion status.

# Statement:
Use React state to manage the list of tasks.
Each task object should have properties like ID, task name, and completion status.
# Functionality:
Add Task: Implement a form in the AddTask component to add new tasks to the list.
Delete Task: Allow users to remove tasks from the list.
Complete Task: Toggle the completion status of tasks when users click on a checkbox.
Filter Tasks: Implement buttons to filter tasks by status (active, completed, all).

# Styling:
Design a simple and user interface using CSS or a UI library like Bootstrap.
# Testing:
Test the app thoroughly to ensure all features work as expected.
# Deployment:
Deploy the app to a hosting service like Vercel to showcase it to others.
Remember to break down the tasks into smaller, manageable them one at a time. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
