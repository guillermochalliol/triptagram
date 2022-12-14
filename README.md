# Triptagram is an upload pictures project created on ReactJS with:

- Tailwind
- Firebase
  - firestore
  - storage
- Custom Hooks
- React Router
- React Hook Form

## Install Project
### Versions used:
- npm: 8.18.0
- node: 18.8.0
- firebase: 9.9.4   
- react: 18.2.0
- react-dom: 18.2.0
- react-scripts: 5.0.1
- react-hook-form: 7.36.1
- react-router-dom: 6.4.0
- postcss: 8.4.16
- postcss-cli: 10.0.0
- tailwindcss": 3.1.8

### To install project run 
`npm install`

## Create  a [Firebase](https://firebase.google.com/) app 

- Logged with your google account  go to `console`
- Add Project
- Enter Project Name > `Continue`
- Disable Google Analitycs (at least you need it) > `Create Project` 
- Register new Web App. Click opn the `</>` icon
- Enter App nickname  and click `Register App`
- You need add Authentication  with MAil/password, Google and Github Auth methods
- with the info given create an **env.development.local** file on project root with the following  format:

```
REACT_APP_APIKEY= given apiKey
REACT_APP_AUTHDOMAIN=given authDomain
REACT_APP_PROJECTID= given projectId
REACT_APP_STORAGEBUCKET=given StorageBucket
REACT_APP_MESSAGINGSENDERID=given messagingSenderId
REACT_APP_APPID=1:301573535761: given appId
```
and run `npm start`

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


### For Tailwind we use PostCSS to compile 

you can run  
### `npm run build:css`
this command  build the css  once, or  for developing you can run :
### `npm run watch:css`
in case you want to build the css everytime you save a file
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
