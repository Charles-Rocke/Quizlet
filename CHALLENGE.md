# Challenge: Create advanced state management system with useReducer + Context API

👨‍💼 You have been tasked by your project manager to refactor this app to using the Context API

YOUR TASKS:

x Duplicate `src` folder to `src-no-context`
x Review data flow and passed props
x Identify prop drilling problem
x Use the Context API to fix the (very small) prop drilling problem
x Create a new context `QuizContext` with the reducer we created earlier
x Create a custom provider component `QuizProvider` and provide all the state to the app
x Create a custom hook to consume state all over the application

- Delete all unnecessary props
- IMPORTANT: Note how you actually need state right in App component. This means you need to wrap the whole App into the context (HINT: try in index.js)
