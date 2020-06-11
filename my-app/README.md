This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify







# Questions for Liz


Week 1 -- May 15, 2020

 1) What exactly is the filetype for JSX? Am I just writing in a standard JS file, but importing the library before my script runs? How do I do this? 

 2) What would be the benefit of using a JSX self-closing tag for something like div? So you'd have <div /> as opposed to <div></div>? ---> <div /> is like a named component.

 3) I don't have a lot of knowledge about class terminology. I know that they're like objects with specific properties that you can set, and you can create new ones that will take a value for each property. What does it mean to "extend" a class/component? Is it essentially a sub-class of a class with more properties?

 I think a good first step would be to set-up a file for me to mess around with outside of freeCodeCamp. They didn't do a super job with explaining how that goes. 


Week 3 -- May 28, 2020

# Features for Site

1. Meme-generator 
2. Clickable Meme Map
- Clickable areas that will return/display one randomly selected meme from that area
  - Stretch = 3-5 randomly selected memes from that area
- Grouping of picture files (grouped by location)

## Components to Use
1. Map Component
2. Clickable Area Component
- Properties
  - Name (string)
  - Memes (array)
  - Coordinates? (array or object with number values, 2-4 points of reference)
3. Display Area 
- Modal 
- Area Clicked ({clickableArea.name})
- Meme pulled (randomly selected meme/picture)
- Close Button
- Next/previous button?
- Properties
  - Name of Area
  - Singular Meme file
