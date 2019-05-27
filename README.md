# Plugify  Challenge

## Description

The challenge is to create a search autocomplete input backed by the Plugify API.

Users should be able to start typing in the input, and the input should start showing them suggestions as provided by the API.

## Technology and packages used

The app is built using `React.js`.<br>
Packages installed:
- `Material-UI`: user interface library, it provides styled React components out of the box. I find it useful when implementing prototypes or for projects where the design is not the main focus or not specified, as it saves a lot of time. It's well maintained and safe to use.
- `react-autosuggest`: package providing logic and design for autofill inputs. It's one of the options recommended on Material-UI and I found that it was the easiest to implement based on my requirements. I only had to customize the filtering to my needs, in this case to use the Plugify API. Again, the main reasons for using this tool are the lack of specific design requirements and the amount of time saved.
- `fetch-mock`: package to mock API calls during tests, as it's not good practice to rely on external servers for testing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
