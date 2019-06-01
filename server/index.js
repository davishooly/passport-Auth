const express = require('express');
const passport = require('passport');
const Router = require('router');
const PassportSetup = require('./Auth/passport');

const app = express();
const router = Router();

app.get("/auth/github", passport.authenticate('github', (error, data, info)=>{

}));

app.listen(4000, ()=>{
  console.log(`App running on port: 4000`)
});
