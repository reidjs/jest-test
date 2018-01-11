Jest 
Facebook's JS Testing framework for react or javascript
Allows you to mock components, libraries. 

npm install --save-dev jest
npm install --save-dev redux-mock-store

Update package.json 

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "postinstall": "webpack",
    "webpack": "webpack --watch"
  },

  test: "jest";

```

touch .babelrc 

Must have babelrc in addition to webpack because jest will ignore it.
```
{ 
  "presets": [
    "es2015",
    "react"
  ]
}
```

Make folder __tests__ in the same folder as what you're testing. 
e.g. reducer __tests__ goes in reducer folder.

Make sure you have jest-cli 

Reducers are simple to test becasue theyre pure functions 