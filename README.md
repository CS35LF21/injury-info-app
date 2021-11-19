# README

Contributors:
Dylan Wilbur,
Keaton Heisterman,
Ethan Matus

## Configuration
You will need to add a file `config/keys.js` with the following information:
```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Getting Set up: install dependencies
```bash
npm install
npm run client-install
```

Note: `npm run client-install` will likely complain about npm audit vulnerabilities. This is not an issue: see [this github issue](https://github.com/facebook/create-react-app/issues/11174)

## Starting the server


```bash
npm run dev
```
