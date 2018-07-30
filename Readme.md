Steps For Creating This Project:

1) Initialize npm
npm init -y

2) Install webpack
npm install webpack@4.0.1 --save-dev

3) Install package to have access to CLI (command line interface) for webpack so we can use webpack from the command license
npm install webpack-cli@2.0.9 --save-dev

** devDependencies in package.json is where these will show up

4) Add a .gitignore file that ignores node_modules/

5) Add "build": "webpack" to the "scripts" segment of package.json. This allows us to build applications in webpack

6) Create a configuration file for webpack called webpack.config.js

7) Create dist and src folders within our main project folder. Dist is for all our bundled code and html files, and src is for all our javascript source code

8) Create our index.html file within our dist folder. We include a script tag to add our bundle.js file
<script type="text/javascript" src="bundle.js"></script>

9) Add ping-pong.js to our src folder to hold our ping pong business logic. It needs to export the constructor for our pingpong object

10) Add main.js to our src folder to hold our ping pong user interface logic

11) Run "npm run build" within our root directory in the console. Webpack will add dependencies via the import statements you've added and bundle.js will appear in your dist folder. Now it is possible to open index.html in the browser.

12) Add dist/ to our .gitignore file. Since npm run build creates bundle.js at any time, we don't need to include the dist file in our repo.

13) Install packages to bundle our CSS files
npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev

14) Update webpack.config.js file (see webpack file Readme #14 notes)

15) Create a .css file in our src folder since now our webpack should be able to read it because of steps 13 & 14, and add an import statement for that file in our main.js file

16) Run "npm run build" and we can see our new styles applied to the page

17) Move index.html from dist to src. Install a plugin HTMLWebpackPlugin that will allow webpack to bundle our HTML and move it into the dist folder for us.
npm install html-webpack-plugin@3.0.6 --save-dev

18) Edit webpack.config.js to add HTMLWebpackPlugin (see webpack file Readme #18 notes)

19) Remove <script> tag from index.html that links our bundle.js file since webpack will now add it for us

20) Install plugin to keep files organized
npm install clean-webpack-plugin@0.1.18 --save-dev

21) Add file organizer plugin to our webpack.config.js file (see webpack file Readme #21 notes)

22) Install minifier plugin
npm install uglifyjs-webpack-plugin@1.2.2 --save-dev

23) Add minifier plugin to our webpack.config.js file (see webpack file Readme #23 notes)

24) Run "npm run build" to minify the bundle.js file

25) Install live development server
npm install webpack-dev-server@3.1.0 --save-dev

26) Add live development server to our webpack.config.js file (see webpack file Readme #26 notes)

27) Add webpack-dev-server as a "start" script in package.json
"start": "webpack-dev-server --open"

28) Run npm run start and now you can see changes you make to the file in real time as you save it; you can use control + Z to stop it from running

29) Add --mode development to "build" in package.json in order to get rid of the error and choose which mode you want to build in. You can choose development or production.

30) Modify "start" in package.json to use webpack to build our code before starting the development server (create dist folder and bundles)
"scripts": {
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development"
  },
    ** This actually doesn't work and the dist file never appears

31) Install eslint and eslint-loader
npm install eslint@4.18.2 --save-dev
npm install eslint-loader@2.0.0 --save-dev

32) Update webpack.config.js rules (see #32 notes)

33) Create ESLint configuration file .eslintrc in the root directory of your project

34) Update package.json to add another script so we dont have to build every time we lint; now we can run "npm run lint" and it will run ESLint for all javascript files in our src folder
"lint": "eslint src/*.js"
